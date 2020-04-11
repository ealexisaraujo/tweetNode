const Query = {
  get: async (__, { key }, { redis }) => {
    try {
      let tweets = await redis.zrevrangebyscore(key, Date.now(), 0);
      tweets = tweets.map((string) => {
        let tweet;
        tweet = JSON.parse(string);
        return tweet;
      });
      console.log(tweets);

      return tweets;
    } catch (error) {
      return null;
    }
  },
};

module.exports = Query;
