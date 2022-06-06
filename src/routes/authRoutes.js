const authController = require('../app/controllers/authController');


module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
    routes.post("/", authController.login);

    server.use(prefix, routes);
}