const fleetController = require('../app/controllers/fleetController')
const fleetPostMiddleware = require('../app/middlewares/validFleetPost')

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post("/:id/fleet", fleetPostMiddleware, fleetController.createFleet)
    routes.get("/:id/fleet", fleetController.getFleet)
    routes.get("/:id/fleet/:id_fleet", fleetController.getFleetByID)
    routes.put("/:id/fleet/:id_fleet", fleetController.updateFleet)
    routes.delete("/:id/fleet/:id_fleet", fleetController.deleteFleet)
    server.use(prefix, routes);
}