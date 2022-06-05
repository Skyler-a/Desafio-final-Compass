const personController = require('../app/controllers/personController');
const personMiddleware = require('../app/middlewares/validPerson');

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post("/", personMiddleware, personController.createPerson)
    routes.get("/", personController.findPerson)
    routes.get("/:id", personController.findPersonById)
    routes.delete("/:id", personController.deletePerson)
    routes.put("/:id", personController.updatePerson)

    server.use(prefix, routes);
}