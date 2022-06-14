const rentalController = require('../app/controllers/rentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post("/", rentalController.createRental)
    routes.get("/", rentalController.findRental)
    routes.get("/:id", rentalController.findRentalById)
    routes.put("/:id", rentalController.updateRental)
    routes.delete("/:id", rentalController.deleteRental)

    server.use(prefix, routes);
}