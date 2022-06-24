const RentalController = require('../app/controllers/rentalController');
const RentalMiddleware = require('../app/middlewares/validRental');
const RentalUpdateMiddleware = require('../app/middlewares/validRentalUpdate');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', RentalMiddleware, RentalController.createRental);
  routes.get('/', RentalController.findRental);
  routes.get('/:id', RentalController.findRentalById);
  routes.put('/:id', RentalUpdateMiddleware, RentalController.updateRental);
  routes.delete('/:id', RentalController.deleteRental);

  server.use(prefix, routes);
};
