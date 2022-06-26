const PersonController = require('../app/controllers/personController');
const PersonMiddleware = require('../app/middlewares/validPerson');
const PersonUpdateMiddleware = require('../app/middlewares/validPersonUpdate');
const IdMiddleware = require('../app/middlewares/validId');

module.exports = (server, routes, prefix = '/api/v1/person') => {
  routes.post('/', PersonMiddleware, PersonController.createPerson);
  routes.get('/', PersonController.findPerson);
  routes.get('/:id', IdMiddleware, PersonController.findPersonById);
  routes.delete('/:id', IdMiddleware, PersonController.deletePerson);
  routes.put('/:id', IdMiddleware, PersonUpdateMiddleware, PersonController.updatePerson);

  server.use(prefix, routes);
};
