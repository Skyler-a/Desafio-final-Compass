const carController = require('../app/controllers/carController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post("/", carController.createCar)
    routes.get("/", carController.findCar)
    routes.get("/:id", carController.findCarById)
    routes.delete("/:id", carController.deleteCar)
    routes.put("/:id", carController.updateCar)

    server.use(prefix, routes);
}