import {
  __,
  add,
  always,
  gte,
  length,
  ifElse,
  indexOf,
  pipe,
  slice,
  both,
  complement,
  isNil,
  isEmpty,
} from "ramda";
import serialize from "serialize-javascript";

// Email pattern: something@domain.ext
const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Password pattern: 8 characters and contain at least one letter and one number
const PASSWORD_PATTERN = /(?=^.{8,}$)(?=.*[a-zA-Z])(?=.*[0-9]).*$/;

// substringFromMatch :: String -> String -> String
// Returns the portion of string after the specified string/character (match
// parameter). If there is no match the original string is returned.
// Examples:
// '?' -> 'http://example.com?q=search&limit=10' -> 'q=search&limit=10'
// '?' -> 'http://example.com' -> 'http://example.com'
export const substringFromMatch = (match) => (string) =>
  pipe(
    indexOf(match),
    ifElse(
      gte(__, 0),
      pipe(add(length(match)), slice(__, Infinity, string)),
      always(string)
    )
  )(string);

// substringToMatch :: String -> String -> String
// Returns the portion of string before the specified string/character (match
// parameter). If there is no match the original string is returned.
// Examples:
// '?' -> 'http://example.com?q=search&limit=10' -> 'http://example.com'
// '?' -> 'http://example.com' -> 'http://example.com'
export const substringToMatch = (match) => (string) =>
  pipe(
    indexOf(match),
    ifElse(gte(__, 0), slice(0, __, string), always(string))
  )(string);

// jsonStringify :: Object -> String
export const jsonStringify = (data) =>
  serialize(data, { isJSON: true, ignoreFunction: true });

// isDefined :: Mixed -> Boolean
export const isDefined = both(complement(isEmpty), complement(isNil));

// isEmailValid :: String -> Boolean
export const isEmailValid = (email) => EMAIL_PATTERN.test(email);

// isPasswordValid :: String -> Boolean
// 8 characters with at least one letter and one number
export const isPasswordValid = (password) => PASSWORD_PATTERN.test(password);
