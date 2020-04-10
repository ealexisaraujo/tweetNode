'use strict';
require('dotenv').config();

const config = {
  redis: {
    uri: process.env.REDIS_URI,
    dataRetention: process.env.REDIS_DATA_RETENTION_IN_MS,
  },
};

module.exports = config;
