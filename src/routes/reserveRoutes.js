const ReserveController = require("../app/controllers/reserveController");

module.exports = (server, routes, prefix = "/api/v1/rental") => {
  routes.post("/:id/reserve", ReserveController.createReserve);
  routes.get("/:id/reserve", ReserveController.getReserve);
  routes.get("/:id/reserve/:id_reserve", ReserveController.getReserveId);
  routes.put("/:id/reserve/:id_reserve", ReserveController.updateReserve);
  routes.delete("/:id/reserve/:id_reserve", ReserveController.deleteReserve);
  server.use(prefix, routes);
};
