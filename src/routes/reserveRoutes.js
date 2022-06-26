const ReserveController = require('../app/controllers/reserveController');
const idMiddleware = require('../app/middlewares/validIdReserve');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:id/reserve', idMiddleware, ReserveController.createReserve);
  routes.get('/:id/reserve', idMiddleware, ReserveController.getReserve);
  routes.get('/:id/reserve/:id_reserve', idMiddleware, ReserveController.getReserveId);
  routes.put('/:id/reserve/:id_reserve', idMiddleware, ReserveController.updateReserve);
  routes.delete('/:id/reserve/:id_reserve', idMiddleware, ReserveController.deleteReserve);
  server.use(prefix, routes);
};
