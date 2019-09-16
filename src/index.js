const Hapi = require('hapi');
const Boom = require('boom');
const routes = require('./routes.js');

require('./data/database');

const server = Hapi.server({
  port: 8000,
  host: 'localhost',
  routes: { cors: true }
});

const startServer = async () => {
  try {

    routes.forEach((route) => {
      console.dir(route, {depth: null});
      server.route(route);
    });

    await server.start();
    console.log(`Server running at ${server.info.uri}`);

  } catch(err) {
    console.log(err);
    Boom.badImplementation(err);
  }
};

startServer();

module.exports = server;