const AuthController = require('../app/controllers/authController');
const validLogin = require('../app/middlewares/validLogin');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', validLogin, AuthController.login);

  server.use(prefix, routes);
};
