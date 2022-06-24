/* eslint-disable radix */
const rentalService = require("../service/rentalService");

class RentalController {
  async createRental(req, res) {
    try {
      const result = await rentalService.createRental(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async findRental(req, res) {
    try {
      const { page, limit } = req.query;
      const options = {
        page: parseInt(page),
        limit: parseInt(limit),
      };
      const result = await rentalService.findRental(req.query, options);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async findRentalById(req, res) {
    try {
      const result = await rentalService.findRentalById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(400);
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async updateRental(req, res) {
    try {
      const result = await rentalService.updateRental(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(400);
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async deleteRental(req, res) {
    try {
      const result = await rentalService.deleteRental(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(400);
      }
      return res.status(error.status || 400).json(error.message);
    }
  }
}

module.exports = new RentalController();
