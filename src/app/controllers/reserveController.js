const reserveService = require('../service/reserveService');

class reserveController {
    async createReserve(req, res) {
        try {
            const result = await reserveService.createReserve(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = new reserveController();