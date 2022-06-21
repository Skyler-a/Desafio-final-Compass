const reserveService = require('../service/reserveService');

class reserveController {
    async createReserve(req, res) {
        try {
            const result = await reserveService.createReserve(req.body, req.params.id);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async getReserve(req, res) {
        try {
            const result = await reserveService.getReserve(req.params.id, req.query);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async getReserveId(req, res) {
        try {
            const result = await reserveService.getReserveId(req.params.id_reserve);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async updateReserve(req, res) {
        try {
            const result = await reserveService.updateReserve(req.params.id_reserve, req.body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async deleteReserve(req, res) {
        try {
            const result = await reserveService.deleteReserve(req.params.id_reserve);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = new reserveController();