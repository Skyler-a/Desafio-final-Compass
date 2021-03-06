const FleetService = require('../service/fleetService');
const BadRequest = require('../errors/badRequest');

class FleetController {
  async createFleet(req, res) {
    const payload = req.body;
    try {
      const result = await FleetService.createFleet(payload, req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400);
      }
      return res.status(error.status || 400).json(error);
    }
  }

  async getFleet(req, res) {
    try {
      const { page, limit } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10)
      };
      const result = await FleetService.getFleet(req.query, req.params.id, options);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async getFleetByID(req, res) {
    try {
      const result = await FleetService.getFleetById(req.params.id, req.params.id_fleet);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async updateFleet(req, res) {
    try {
      const result = await FleetService.updateFleet(req.params.id, req.params.id_fleet, req.body);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async deleteFleet(req, res) {
    try {
      const result = await FleetService.deleteFleet(req.params.id, req.params.id_fleet);
      return res.status(204).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }
}
module.exports = new FleetController();
