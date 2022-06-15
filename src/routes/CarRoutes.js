const carController = require('../app/controllers/carController');
const carMiddleware = require('../app/middlewares/validCar');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post("/", carMiddleware, carController.createCar)
    routes.get("/", carController.findCar)
    routes.get("/:id", carController.findCarById)
    routes.delete("/:id", carController.deleteCar)
    routes.put("/:id", carMiddleware, carController.updateCar)

    server.use(prefix, routes);
}