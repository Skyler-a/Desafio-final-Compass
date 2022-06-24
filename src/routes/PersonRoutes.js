const PersonController = require('../app/controllers/personController');
const PersonMiddleware = require('../app/middlewares/validPerson');
const PersonUpdateMiddleware = require('../app/middlewares/validPersonUpdate');

module.exports = (server, routes, prefix = '/api/v1/person') => {
  routes.post('/', PersonMiddleware, PersonController.createPerson);
  routes.get('/', PersonController.findPerson);
  routes.get('/:id', PersonController.findPersonById);
  routes.delete('/:id', PersonController.deletePerson);
  routes.put('/:id', PersonUpdateMiddleware, PersonController.updatePerson);

  server.use(prefix, routes);
};
