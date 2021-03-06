const reserveRepository = require('../repository/reserveRepository');
const validateCarId = require('./validateIdCar');
const validateRentalId = require('./validateIdRental');
const validateUserId = require('./validateUserId');
const calculateFinalValue = require('./calculateFinalValue');
const validateUserCanDrive = require('./validateUserDrive');
const validateDateRented = require('./validateDateRented');
const NotFound = require('../errors/notFound');

class ReserveService {
  async createReserve(payload, rentalId) {
    await validateCarId(payload.id_car);
    await validateRentalId(rentalId, payload.id_rental);
    await validateUserId(payload.id_user);
    await validateUserCanDrive(payload.id_user);
    await validateDateRented(payload.data_start, payload.data_end);
    const getAllData = await calculateFinalValue(payload);
    const result = await reserveRepository.createReserve(getAllData);
    return result;
  }

  async getReserve(rentalId, payload, options) {
    await validateRentalId(rentalId);
    const { data_start, data_end, id_car, final_value, id_user } = payload;
    const query = {
      id_rental: rentalId,
      data_start: new RegExp(data_start),
      data_end: new RegExp(data_end)
    };
    if (id_car) query.id_car = id_car;
    if (id_user) query.id_user = id_user;
    if (final_value) query.final_value = final_value;
    const result = await reserveRepository.getReserve(query, options);
    return result;
  }

  async getReserveId(rentalId, idReserve) {
    await validateRentalId(rentalId);
    const result = await reserveRepository.getReserveId(idReserve);
    if (!result) {
      throw new NotFound('id_fleet');
    }
    return result;
  }

  async updateReserve(rentalId, idReserve, payload) {
    await validateCarId(payload.id_car);
    await validateRentalId(rentalId, payload.id_rental);
    await validateUserId(payload.id_user);
    await validateUserCanDrive(payload.id_user);
    if (payload.data_start || payload.data_end) {
      await validateDateRented(payload.data_start, payload.data_end);
    }
    const result = await reserveRepository.updateReserve(idReserve, payload);
    if (!result) {
      throw new NotFound('id_fleet');
    }
    return result;
  }

  async deleteReserve(rentalId, idReserve) {
    await validateRentalId(rentalId);
    const result = await reserveRepository.deleteReserve(idReserve);
    if (!result) {
      throw new NotFound('id_fleet');
    }
    return result;
  }
}
module.exports = new ReserveService();
