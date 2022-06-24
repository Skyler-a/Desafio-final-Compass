const FleetRepository = require("../repository/fleetRepository");
const validateCarId = require("./validateIdCar");
const validateRentalId = require("./validateIdRental");
const NotFound = require("../errors/notFound");

class FleetService {
  async createFleet(payload, id) {
    await validateCarId(payload.id_car);
    await validateRentalId(id, payload.id_rental);
    const result = await FleetRepository.createFleet(payload);
    return result;
  }

  async getFleet(payload, id, options) {
    const { status, plate, id_car, daily_value } = payload;
    await validateRentalId(id);
    const query = {
      status: new RegExp(status),
      plate: new RegExp(plate),
      id_rental: id,
    };
    if (id_car) query.id_car = id_car;
    if (daily_value) query.final_value = daily_value;
    const result = await FleetRepository.getFleet(query, options);
    return result;
  }

  async getFleetById(id, id_fleet) {
    await validateRentalId(id);
    const result = await FleetRepository.getFleetById(id_fleet);
    if (!result) {
      throw new NotFound("id_fleet");
    }
    return result;
  }

  async updateFleet(id, idFleet, payload) {
    await validateCarId(payload.id_car);
    await validateRentalId(id, payload.id_rental);
    const result = await FleetRepository.updateFleet(idFleet, payload);
    if (!result) {
      throw new NotFound("id_fleet");
    }
    return result;
  }

  async deleteFleet(id, idFleet) {
    await validateRentalId(id);
    const result = await FleetRepository.deleteFleet(idFleet);
    if (!result) {
      throw new NotFound("id_fleet");
    }
    return result;
  }
}
module.exports = new FleetService();
