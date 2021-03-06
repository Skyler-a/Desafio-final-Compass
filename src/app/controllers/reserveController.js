const ReserveService = require('../service/reserveService');
const BadRequest = require('../errors/badRequest');

class ReserveController {
  async createReserve(req, res) {
    try {
      const result = await ReserveService.createReserve(req.body, req.params.id);
      return res.status(201).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async getReserve(req, res) {
    try {
      const { page, limit } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10)
      };
      const result = await ReserveService.getReserve(req.params.id, req.query, options);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async getReserveId(req, res) {
    try {
      const result = await ReserveService.getReserveId(req.params.id, req.params.id_reserve);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async updateReserve(req, res) {
    try {
      const result = await ReserveService.updateReserve(req.params.id, req.params.id_reserve, req.body);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async deleteReserve(req, res) {
    try {
      const result = await ReserveService.deleteReserve(req.params.id, req.params.id_reserve);
      return res.status(204).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }
}

module.exports = new ReserveController();
