const fleetService = require("../service/fleetService");

class fleetController {
    async createFleet(req, res) {
        try {
            const result = await fleetService.updateAcessoriesById(req.params.id, req.body);
            return res.status(200).json(result)
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports = new fleetController();