const logger = require('winston');
const config = require('../config');
const server = require('./server');

server.start({ port: 3000 }, ({ port }) => {
  console.log('Server on port', port);
});
