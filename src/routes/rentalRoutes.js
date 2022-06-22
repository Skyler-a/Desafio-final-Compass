const rentalController = require('../app/controllers/rentalController');
const rentalMiddleware = require('../app/middlewares/validRental');
const rentalUpdateMiddleware = require('../app/middlewares/validRentalUpdate');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
    routes.post("/", rentalMiddleware, rentalController.createRental)
    routes.get("/", rentalController.findRental)
    routes.get("/:id", rentalController.findRentalById)
    routes.put("/:id", rentalUpdateMiddleware, rentalController.updateRental)
    routes.delete("/:id", rentalController.deleteRental)

    server.use(prefix, routes);
}