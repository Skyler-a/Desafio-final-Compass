/* eslint-disable prettier/prettier */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

module.exports = (server, routes, prefix = '/api/v1/api-docs') => {
  routes.use('/', swaggerUi.serve);
  routes.get('/', swaggerUi.setup(swaggerDocument));
  server.use(prefix, routes);
};
