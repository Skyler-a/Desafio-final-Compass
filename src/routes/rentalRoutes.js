const RentalController = require('../app/controllers/rentalController');
const RentalMiddleware = require('../app/middlewares/validRental');
const RentalUpdateMiddleware = require('../app/middlewares/validRentalUpdate');
const IdMiddleware = require('../app/middlewares/validId');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', RentalMiddleware, RentalController.createRental);
  routes.get('/', RentalController.findRental);
  routes.get('/:id', IdMiddleware, RentalController.findRentalById);
  routes.put('/:id', IdMiddleware, RentalUpdateMiddleware, RentalController.updateRental);
  routes.delete('/:id', IdMiddleware, RentalController.deleteRental);

  server.use(prefix, routes);
};
