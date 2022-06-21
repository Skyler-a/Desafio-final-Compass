const reserveController = require('../app/controllers/reserveController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post("/:id/reserve", reserveController.createReserve);

    server.use(prefix, routes);
}