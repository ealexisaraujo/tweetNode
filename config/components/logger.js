'use strict';
require('dotenv').config();

const winston = require('winston');
const config = {
  logger: {
    level: process.env.LOGGER_LEVEL,
    enabled: process.env.LOGGER_ENABLED,
  },
};

winston.level = config.logger.level;
if (!config.logger.enabled) {
  winston.remove(winston.transports.Console);
}

module.exports = config;
