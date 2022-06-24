const CarController = require("../app/controllers/carController");
const CarMiddleware = require("../app/middlewares/validCar");
const CarMiddlewareUpdate = require("../app/middlewares/validCarUpdate");
const AuthMiddleware = require("../app/middlewares/validAuth");

module.exports = (server, routes, prefix = "/api/v1/car") => {
  routes.post("/", AuthMiddleware, CarMiddleware, CarController.createCar);
  routes.get("/", CarController.findCar);
  routes.get("/:id", CarController.findCarById);
  routes.delete("/:id", AuthMiddleware, CarController.deleteCar);
  routes.put(
    "/:id",
    AuthMiddleware,
    CarMiddlewareUpdate,
    CarController.updateCar
  );
  routes.put(
    "/:id/accessories/:accessorieId",
    AuthMiddleware,
    CarController.updateAcessoriesById
  );

  server.use(prefix, routes);
};
