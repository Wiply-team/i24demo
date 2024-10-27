import {
  anyPass,
  compose,
  either,
  equals,
  ifElse,
  omit,
  prop,
  propEq,
  propOr,
} from "ramda";

// createFetchApi :: (Function, String) -> (String, Object) -> Promise<ResolvedResponse>
const createFetchApi =
  (fetcher, baseUrl) =>
  (path, options = {}) =>
    resolveResponse(
      fetcher(`${baseUrl}${encodeURI(path)}`, {
        ...options,
        headers: resolveHeaders(options),
        credentials: "include",
      })
    );

// defaultHeaders :: Object -> Object
const defaultHeaders = (headers = {}) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  ...headers,
});

// Object -> Object
export const resolveHeaders = ifElse(
  either(
    compose(equals("GET"), propOr("GET", "method")),
    propEq(true, "resetContentType")
  ),
  compose(omit(["Content-Type"]), defaultHeaders, prop("headers")),
  compose(defaultHeaders, prop("headers"))
);

// resolveResponse :: Promise<Response> -> Promise<ResolvedResponse>
export const resolveResponse = (responsePromise) =>
  responsePromise
    .then((response) =>
      Promise.all([
        response,
        204 === response.status ? null : resolveResponseBody(response),
      ])
    )
    .then(([response, body]) =>
      response.status < 400
        ? buildResolvedResponse(response, body)
        : Promise.reject(buildResolvedResponse(response, body))
    );

// isJsonType :: String -> Boolean
const isJsonType = anyPass([
  equals("application/json"),
  equals("application/problem+json"),
]);

// resolveResponseBody :: Response -> Promise<string>
export const resolveResponseBody = (response) =>
  isJsonType(String(response.headers.get("Content-Type")).toLowerCase())
    ? response.json()
    : response.text();

// buildResolvedResponse :: (Response, Object|String|Null) -> ResolvedResponse
export const buildResolvedResponse = (response, body) => ({
  status: response.status,
  body,
  headers: response.headers,
});

export default createFetchApi;
