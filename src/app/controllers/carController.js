const carService = require('../service/carService');

class carController {
    async createCar(req, res) {
        try {
            const result = await carService.createCar(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async findCar(req, res) {
        const payload = req.query;
        try {
            const result = await carService.findCar(payload);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async findCarById(req, res) {
        try {
            const result = await carService.findCarById(req.params.id);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}
module.exports = new carController();