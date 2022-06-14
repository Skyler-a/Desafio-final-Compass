const rentalService = require('../service/rentalService');

class rentalController {
    async createRental(req, res) {
        try {
            const result = await rentalService.createRental(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = new rentalController();