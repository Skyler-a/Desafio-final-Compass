const rentalService = require('../service/rentalService');
const idNonStandard = require('../utils/idNonStandard');

class rentalController {
    async createRental(req, res) {
        try {
            const result = await rentalService.createRental(req.body);
            return res.status(201).json(result);
        } catch (error) {
            res.status(error.status || 400).json(error)
        }
    }
    async findRental(req, res) {
        try {
            const { page, limit } = req.query
            const options = {
                page: parseInt(page),
                limit: parseInt(limit)
            }
            const result = await rentalService.findRental(req.query, options);
            return res.status(200).json(result);
        } catch (error) {
            res.status(error.status || 400).json(error)
        }
    }
    async findRentalById(req, res) {
        try {
            const result = await rentalService.findRentalById(req.params.id);
            return res.status(200).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)
        }
    }
    async updateRental(req, res) {
        try {
            const result = await rentalService.updateRental(req.params.id, req.body);
            return res.status(200).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)
        }
    }
    async deleteRental(req, res) {
        try {
            const result = await rentalService.deleteRental(req.params.id);
            return res.status(204).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)
        }
    }
}

module.exports = new rentalController();