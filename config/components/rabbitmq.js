'use strict';
require('dotenv').config();

const config = {
  rabbitmq: {
    uri: process.env.RABBITMQ_URI,
  },
};

module.exports = config;
