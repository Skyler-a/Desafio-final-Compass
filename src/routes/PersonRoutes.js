const PersonController = require('../app/controllers/personController');
const PersonMiddleware = require('../app/middlewares/validPerson');
const PersonUpdateMiddleware = require('../app/middlewares/validPersonUpdate');
const PersonGetMiddleware = require('../app/middlewares/validPersonGet');
const IdMiddleware = require('../app/middlewares/validId');

module.exports = (server, routes, prefix = '/api/v1/person') => {
  routes.post('/', PersonMiddleware, PersonController.createPerson);
  routes.get('/', PersonGetMiddleware, PersonController.findPerson);
  routes.get('/:id', IdMiddleware, PersonController.findPersonById);
  routes.delete('/:id', IdMiddleware, PersonController.deletePerson);
  routes.put('/:id', IdMiddleware, PersonUpdateMiddleware, PersonController.updatePerson);

  server.use(prefix, routes);
};
