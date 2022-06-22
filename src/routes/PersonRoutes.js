const personController = require('../app/controllers/personController');
const personMiddleware = require('../app/middlewares/validPerson');
const personUpdateMiddleware = require('../app/middlewares/validPersonUpdate');

module.exports = (server, routes, prefix = '/api/v1/person') => {
    routes.post("/", personMiddleware, personController.createPerson)
    routes.get("/", personController.findPerson)
    routes.get("/:id", personController.findPersonById)
    routes.delete("/:id", personController.deletePerson)
    routes.put("/:id", personUpdateMiddleware, personController.updatePerson)

    server.use(prefix, routes);
}