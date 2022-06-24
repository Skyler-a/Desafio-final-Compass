const CarRepository = require("../repository/carRepository");
const NotFound = require("../errors/notFound");

class CarService {
  async createCar(payload) {
    const result = await CarRepository.createCar(payload);
    return result;
  }

  async findCar(payload, options) {
    const { model, type, brand, color } = payload;
    const query = {
      model: new RegExp(model),
      type: new RegExp(type),
      brand: new RegExp(brand),
      color: new RegExp(color),
    };
    const result = await CarRepository.findCar(query, options);
    return result;
  }

  async findCarById(payload) {
    const result = await CarRepository.findCarById(payload);
    if (!result) {
      throw new NotFound("id");
    }
    return result;
  }

  async deleteCar(payload) {
    const result = await CarRepository.deleteCar(payload);
    if (result == null) {
      throw new NotFound("id");
    }
    return result;
  }

  async updateCar(id, body) {
    const result = await CarRepository.updateCar(id, body);
    if (result == null) {
      throw new NotFound("id");
    }
    const res = await { message: "Car updated successfully" };
    return res;
  }

  async updateAcessoriesById(accessorieId, body) {
    const result = await CarRepository.updateAcessoriesById(accessorieId, body);
    return result;
  }
}
module.exports = new CarService();
