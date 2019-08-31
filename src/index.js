const Hapi = require('hapi');
const Boom = require('boom');
const routes = require('./routes.js');

require('./data/database');

const server = Hapi.server({
  port: 8000,
  host: 'localhost',
  // host: 'https://github.com/ljc3/cep-dev-project-2',
  routes: { cors: true }
});

// // New Hapi
// server.route({
//   method: 'GET',
//   path: '/',
//   handler: (request, h) => {
//     return `Listing 1 = ${encodeURIComponent(routes.listing.all)}`;
//   }
// });
// // New Hapi

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

// process.on('unhandledRejection', (err) => {
//   console.log(err);
//   process.exit(1);
// });

startServer();

module.exports = server;