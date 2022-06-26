const ReserveController = require('../app/controllers/reserveController');
const ReservePostMiddleware = require('../app/middlewares/validReservePost');
const ReserveUpdateMiddleware = require('../app/middlewares/validReserveUpdate');
const idMiddleware = require('../app/middlewares/validIdReserve');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:id/reserve', idMiddleware, ReservePostMiddleware, ReserveController.createReserve);
  routes.get('/:id/reserve', idMiddleware, ReserveController.getReserve);
  routes.get('/:id/reserve/:id_reserve', idMiddleware, ReserveController.getReserveId);
  routes.put('/:id/reserve/:id_reserve', idMiddleware, ReserveUpdateMiddleware, ReserveController.updateReserve);
  routes.delete('/:id/reserve/:id_reserve', idMiddleware, ReserveController.deleteReserve);
  server.use(prefix, routes);
};
