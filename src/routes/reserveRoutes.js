const reserveController = require('../app/controllers/reserveController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post("/:id/reserve", reserveController.createReserve);
    routes.get("/:id/reserve", reserveController.getReserve);
    routes.get("/:id/reserve/:id_reserve", reserveController.getReserveId);
    routes.put("/:id/reserve/:id_reserve", reserveController.updateReserve);
    routes.delete("/:id/reserve/:id_reserve", reserveController.deleteReserve);
    server.use(prefix, routes);
}