const reserveService = require('../service/reserveService');
const idNonStandard = require('../utils/idNonStandard');
class reserveController {
    async createReserve(req, res) {
        try {
            const result = await reserveService.createReserve(req.body, req.params.id);
            return res.status(201).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error.message)
        }
    }
    async getReserve(req, res) {
        try {
            const { page, limit } = req.query
            const options = {
                page: parseInt(page),
                limit: parseInt(limit)
            }
            const result = await reserveService.getReserve(req.params.id, req.query, options);
            return res.status(200).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error.message)
        }
    }
    async getReserveId(req, res) {
        try {
            const result = await reserveService.getReserveId(req.params.id, req.params.id_reserve);
            return res.status(200).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error.message)
        }
    }
    async updateReserve(req, res) {
        try {
            const result = await reserveService.updateReserve(req.params.id, req.params.id_reserve, req.body);
            return res.status(200).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error.message)
        }
    }
    async deleteReserve(req, res) {
        try {
            const result = await reserveService.deleteReserve(req.params.id, req.params.id_reserve);
            return res.status(200).json(result);
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error.message)
        }
    }
}

module.exports = new reserveController();