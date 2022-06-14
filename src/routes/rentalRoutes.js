const rentalController = require('../app/controllers/rentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post("/", rentalController.createRental)

    server.use(prefix, routes);
}