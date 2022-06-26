const FleetController = require('../app/controllers/fleetController');
const FleetPostMiddleware = require('../app/middlewares/validFleetPost');
const fleetUpdateMiddleware = require('../app/middlewares/validFleetUpdate');
const FleetGetMiddleware = require('../app/middlewares/validFleetGet');
const IdMiddleware = require('../app/middlewares/validIdFleet');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:id/fleet', IdMiddleware, FleetPostMiddleware, FleetController.createFleet);
  routes.get('/:id/fleet', IdMiddleware, FleetGetMiddleware, FleetController.getFleet);
  routes.get('/:id/fleet/:id_fleet', IdMiddleware, FleetController.getFleetByID);
  routes.put('/:id/fleet/:id_fleet', IdMiddleware, fleetUpdateMiddleware, FleetController.updateFleet);
  routes.delete('/:id/fleet/:id_fleet', IdMiddleware, FleetController.deleteFleet);
  server.use(prefix, routes);
};
