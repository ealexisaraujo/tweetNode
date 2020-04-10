/* eslint-disable global-require */
const logger = require('winston');

const type = process.env.PROCESS_TYPE;

logger.info(`Starting '${type}' process`, { pid: process.pid });

if (type === 'api') {
  require('./api');
} else if (type === 'twitter-stream') {
  require('./worker/twitter-stream');
} else if (type === 'load-data') {
  require('./worker/load-data');
} else {
  throw new Error(`
    ${type} is an unsupported process type.
    Use one of: 'api', 'twitter-stream', 'load-data'!
  `);
}
