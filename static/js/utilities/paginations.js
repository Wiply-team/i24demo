import {
  __,
  allPass,
  always,
  complement,
  equals,
  gt,
  is,
  pipe,
  when,
} from "ramda";
import { applyQueryParamsToUrl } from "./urls";
import { substringToMatch } from "./strings";

// isLoadingFirstPage :: (Boolean, [Object]) -> Boolean
export const isLoadingFirstPage = (isFetching = false, collection = []) =>
  isFetching && collection.length === 0;

// calculateTotalPages :: (Number, Number) -> Number
export const calculateTotalPages = (totalArticles, limit) =>
  Math.ceil(totalArticles / limit);

// isValidNumber :: Any -> Boolean
const isValidNumber = allPass([is(Number), complement(equals(NaN)), gt(__, 0)]);

// resolvePaginationPage :: Number -> Location -> Number
export const resolvePaginationPage = (fallbackPage) =>
  pipe(
    (location) => new URL(location.href).searchParams.get("page"),
    (page) => Number(page),
    when(complement(isValidNumber), always(fallbackPage))
  );

// resolvePaginatedUrl :: (String, Number) -> String
export const resolvePaginatedUrl = (href, page) =>
  when(
    () => page > 1,
    applyQueryParamsToUrl({ page })
  )(substringToMatch("?")(href));
