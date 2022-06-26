const CarController = require('../app/controllers/carController');
const CarMiddleware = require('../app/middlewares/validCar');
const CarMiddlewareUpdate = require('../app/middlewares/validCarUpdate');
const AuthMiddleware = require('../app/middlewares/validAuth');
const CarGetMiddleware = require('../app/middlewares/validCarGet');
const IdMiddleware = require('../app/middlewares/validId');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', AuthMiddleware, CarMiddleware, CarController.createCar);
  routes.get('/', AuthMiddleware, CarGetMiddleware, CarController.findCar);
  routes.get('/:id', AuthMiddleware, IdMiddleware, CarController.findCarById);
  routes.delete('/:id', AuthMiddleware, IdMiddleware, CarController.deleteCar);
  routes.put('/:id', AuthMiddleware, IdMiddleware, CarMiddlewareUpdate, CarController.updateCar);
  routes.put('/:id/accessories/:accessorieId', AuthMiddleware, IdMiddleware, CarController.updateAcessoriesById);

  server.use(prefix, routes);
};
