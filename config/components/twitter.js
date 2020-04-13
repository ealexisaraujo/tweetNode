'use strict';
require('dotenv').config();

const config = {
  twitter: {
    consumerKey: 'g8OHgY6NR8H7qaIOpOq0phRjT',
    consumerSecret: 'LBgKjFFu4WCyx35Kfm0yfvcmPPUay2ogZE0S7rQGhGVWCBpXap',
    accessTokenKey: '51149651-UBBNhI080KD3nuKw6d2jjN8oy3FIqFqLxW8CvKCk8',
    accessTokenSecret: 'ieTmF1WcKqYAXaQm4YShs15vEPeYA0qXo0IIVS8wLIadO',
    track: process.env.TWITTER_TRACK,
  },
};

module.exports = config;
