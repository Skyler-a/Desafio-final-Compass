const fleetController = require('../app/controllers/fleetController')
const fleetPostMiddleware = require('../app/middlewares/validFleetPost')
const fleetUpdateMiddleware = require('../app/middlewares/validFleetUpdate')

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post("/:id/fleet", fleetPostMiddleware, fleetController.createFleet)
    routes.get("/:id/fleet", fleetController.getFleet)
    routes.get("/:id/fleet/:id_fleet", fleetController.getFleetByID)
    routes.put("/:id/fleet/:id_fleet", fleetUpdateMiddleware, fleetController.updateFleet)
    routes.delete("/:id/fleet/:id_fleet", fleetController.deleteFleet)
    server.use(prefix, routes);
}