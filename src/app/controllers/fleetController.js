const fleetService = require("../service/fleetService");
const idNonStandard = require('../utils/idNonStandard');

class fleetController {
    async createFleet(req, res) {
        const payload = req.body;
        try {
            const result = await fleetService.createFleet(payload, req.params.id);
            return res.status(200).json(result)
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)
        }
    }
    async getFleet(req, res) {
        try {
            const result = await fleetService.getFleet(req.query, req.params.id);
            return res.status(200).json(result)
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)

        }
    }
    async getFleetByID(req, res) {
        try {
            const result = await fleetService.getFleetById(req.params.id, req.params.id_fleet);
            return res.status(200).json(result)
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)
        }
    }
    async updateFleet(req, res) {
        try {
            const result = await fleetService.updateFleet(req.params.id, req.params.id_fleet, req.body);
            return res.status(200).json(result)
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)
        }
    }
    async deleteFleet(req, res) {
        try {
            const result = await fleetService.deleteFleet(req.params.id, req.params.id_fleet);
            return res.status(204).json(result)
        } catch (error) {
            if (error.kind === "ObjectId") {
                return res.status(400).json(new idNonStandard())
            }
            res.status(error.status || 400).json(error)
        }
    }
}
module.exports = new fleetController();