const AuthController = require('../app/controllers/authController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', AuthController.login);

  server.use(prefix, routes);
};
