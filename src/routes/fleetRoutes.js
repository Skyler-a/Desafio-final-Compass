const FleetController = require('../app/controllers/fleetController');
const FleetPostMiddleware = require('../app/middlewares/validFleetPost');
const fleetUpdateMiddleware = require('../app/middlewares/validFleetUpdate');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:id/fleet', FleetPostMiddleware, FleetController.createFleet);
  routes.get('/:id/fleet', FleetController.getFleet);
  routes.get('/:id/fleet/:id_fleet', FleetController.getFleetByID);
  routes.put('/:id/fleet/:id_fleet', fleetUpdateMiddleware, FleetController.updateFleet);
  routes.delete('/:id/fleet/:id_fleet', FleetController.deleteFleet);
  server.use(prefix, routes);
};
