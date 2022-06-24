const rentalRepository = require('../repository/rentalRepository');
const getCep = require('./callCepApi');
const NotFound = require('../errors/notFound');
const BadRequest = require('../errors/badRequest');
const validateCnpj = require('../utils/validateCnpj');

class RentalService {
  async createRental(payload) {
    const cnpjValidation = await validateCnpj(payload.cnpj);
    if (cnpjValidation === false) throw new BadRequest('Invalid Cnpj');
    const informations = await getCep(payload);
    const result = await rentalRepository.createRental(informations);
    return result;
  }

  async findRental(payload, options) {
    const { name, cnpj, activities } = payload;
    const query = {
      name: new RegExp(name),
      cnpj: new RegExp(cnpj),
      activities: new RegExp(activities)
    };
    const result = await rentalRepository.findRental(query, options);
    return result;
  }

  async findRentalById(id) {
    const result = await rentalRepository.findRentalById(id);
    if (result == null) {
      throw new NotFound('id');
    }
    return result;
  }

  async updateRental(id, body) {
    const cnpjValidation = await validateCnpj(body.cnpj);
    if (cnpjValidation === false) throw new BadRequest('Invalid Cnpj');
    const result = await rentalRepository.updateRental(id, body);
    if (result == null) {
      throw new NotFound('id');
    }
    return result;
  }

  async deleteRental(id) {
    const result = await rentalRepository.deleteRental(id);
    if (result == null) {
      throw new NotFound('id');
    }
    return result;
  }
}
module.exports = new RentalService();
