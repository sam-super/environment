import {
  array,
  boolean,
  email,
  float,
  integer,
  ipAddress,
  negativeInteger,
  nonNegativeInteger,
  nonPositiveInteger,
  port,
  positiveInteger,
  string,
  url,
  whitelist,
  regex,
} from './parsers';

const parsers = {
  array,
  boolean,
  email,
  float,
  integer,
  url,
  ipAddress,
  negativeInteger,
  nonNegativeInteger,
  nonPositiveInteger,
  port,
  positiveInteger,
  regex,
  string,
  whitelist,
};

export { parsers };
export {
  makeEnv,
  Env,
  Schema,
  SchemaEntry,
  SchemaEntryRequiredInfo,
} from './environment';
export { default as EnvironmentVariableError } from './EnvironmentVariableError';

export { Parser } from './parsers';
