const CarService = require('../service/carService');
const BadRequest = require('../errors/badRequest');

class CarController {
  async createCar(req, res) {
    try {
      const result = await CarService.createCar(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async findCar(req, res) {
    const payload = req.query;
    try {
      const { page, limit } = req.query;
      const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10)
      };
      const result = await CarService.findCar(payload, options);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async findCarById(req, res) {
    try {
      const result = await CarService.findCarById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === `ObjectId`) {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async deleteCar(req, res) {
    try {
      const result = await CarService.deleteCar(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      if (error.kind === `ObjectId`) {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async updateCar(req, res) {
    try {
      const result = await CarService.updateCar(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === `ObjectId`) {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async updateAcessoriesById(req, res) {
    try {
      const result = await CarService.updateAcessoriesById(req.params.accessorieId, req.body);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === `ObjectId`) {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }
}
module.exports = new CarController();
