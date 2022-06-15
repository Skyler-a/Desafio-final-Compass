const carService = require('../service/carService');
const idNonStandard = require('../utils/idNonStandard');
class carController {
    async createCar(req, res) {
        try {
            const result = await carService.createCar(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async findCar(req, res) {
        const payload = req.query;
        try {
            const { page, limit } = req.query
            const options = {
                page: parseInt(page),
                limit: parseInt(limit)
            }
            const result = await carService.findCar(payload, options);
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
            if (error.name === "CastError") {
                return res.json(new idNonStandard())
            }
            return res.status(400).json(error)
        }
    }
    async deleteCar(req, res) {
        try {
            const result = await carService.deleteCar(req.params.id);
            return res.status(204).json(result)
        } catch (error) {
            if (error.name === "CastError") {
                return res.json(new idNonStandard())
            }
            return res.status(400).json(error)
        }
    }
    async updateCar(req, res) {
        try {
            const result = await carService.updateCar(req.params.id, req.body);
            return res.status(200).json(result)
        } catch (error) {
            if (error.name === "CastError") {
                return res.json(new idNonStandard())
            }
            return res.status(400).json(error)
        }
    }
    async findAccessoriesById(req, res) {
        try {
            const result = await carService.findAccessoriesById(req.params.id);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}
module.exports = new carController();