const carController = require('../app/controllers/carController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post("/", carController.createCar)
    routes.get("/", carController.findCar)

    server.use(prefix, routes);
}