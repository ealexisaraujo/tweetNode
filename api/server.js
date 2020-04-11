const { GraphQLServer } = require('graphql-yoga');
const Redis = require('ioredis');
const config = require('../config');

const redis = new Redis(config.redis.uri);
const path = require('path');

const resolvers = require('./graphql/resolvers');

const server = new GraphQLServer({
  typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
  resolvers,
  context: { redis },
});

module.exports = server;
