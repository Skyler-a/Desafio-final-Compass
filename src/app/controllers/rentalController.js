const RentalService = require('../service/rentalService');
const BadRequest = require('../errors/badRequest');

class RentalController {
  async createRental(req, res) {
    try {
      const result = await RentalService.createRental(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async findRental(req, res) {
    try {
      const { page, limit } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10)
      };
      const result = await RentalService.findRental(req.query, options);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async findRentalById(req, res) {
    try {
      const result = await RentalService.findRentalById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async updateRental(req, res) {
    try {
      const result = await RentalService.updateRental(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async deleteRental(req, res) {
    try {
      const result = await RentalService.deleteRental(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }
}

module.exports = new RentalController();
