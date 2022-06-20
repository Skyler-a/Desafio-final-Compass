const carController = require('../app/controllers/carController');
const carMiddleware = require('../app/middlewares/validCar');
const authMiddleware = require('../app/middlewares/validAuth');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post("/", authMiddleware, carMiddleware, carController.createCar)
    routes.get("/", authMiddleware, carController.findCar)
    routes.get("/:id", authMiddleware, carController.findCarById)
    routes.delete("/:id", authMiddleware, carController.deleteCar)
    routes.put("/:id", authMiddleware, carMiddleware, carController.updateCar)
    routes.put("/:id/accessories/:accessorieId", authMiddleware, carController.updateAcessoriesById)

    server.use(prefix, routes);
}