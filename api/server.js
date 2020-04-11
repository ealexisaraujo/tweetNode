const { GraphQLServer } = require('graphql-yoga');

const path = require('path');

const resolvers = require('./graphql/resolvers');

console.log(path.join(__dirname, 'graphql/schema.graphql'));

const server = new GraphQLServer({
  typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
  resolvers,
});

module.exports = server;
