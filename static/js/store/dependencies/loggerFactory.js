import { bind, partial } from "ramda";

/**
 * This is a custom logger used for development purpose. If you have
 * any kind of log to do, please put functions here.
 */

const loggerHead = (type) =>
  `[${new Date().toISOString()}] ${type.toUpperCase()}:`;

const info = (output) =>
  partial(bind(output.info, output), [loggerHead("INFO")]);

const error = (output) =>
  partial(bind(output.error, output), [loggerHead("ERROR")]);

const warn = (output) =>
  partial(bind(output.warn, output), [loggerHead("WARNING")]);

const log = (output) => partial(bind(output.log, output), [loggerHead("LOG")]);

// createLogger :: (Sentry, Output) -> Logger
const createLogger = (sentry, output) => ({
  error: error(output),
  info: info(output),
  log: log(output),
  warn: warn(output),
  captureException: sentry ? sentry.captureException : () => {},
  captureMessage: sentry ? sentry.captureMessage : () => {},
});

export default createLogger;
