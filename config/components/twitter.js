'use strict';
require('dotenv').config();

const config = {
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessTokenKey: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    track: process.env.TWITTER_TRACK,
  },
};

module.exports = config;
