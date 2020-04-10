'use strict';

const joi = require('joi');
const logger = require('winston');
const config = require('../../config');
const tortoise = require('../../models/tortoise');
const redis = require('../../models/redis');

const messageSchema = joi
  .object({
    createdAt: joi.date().required(),
    text: joi.string().required(),
    tweeter: joi.string().required(),
  })
  .required();

tortoise
  .queue(tortoise.QUEUE.tweet)
  .prefetch(1)
  .json()
  .subscribe((msg, ack, nack) => {
    const { error, value } = joi.validate(msg, messageSchema);
    if (error) {
      logger.warn('Invalid Tweet', {
        msg,
        error: error.message,
      });
      ack();
      return;
    }

    redis
      .zadd(redis.SET.tweets, value.createdAt.getTime(), JSON.stringify(msg))
      .then(() => {
        logger.debug('Tweet Save Success', { msg });
        ack();
      })
      .catch((err) => {
        logger.error('Tweet Save Error', { error: err });
        nack();
      });
  });

setInterval(() => {
  redis.zremrangebyscore(
    redis.SET.tweets,
    0,
    Date.now() - config.redis.dataRetention
  );
}, 60 * 1000);
