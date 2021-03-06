const rentalSchema = require('../schema/rentalSchema');

class RentalRepository {
  async createRental(payload) {
    return rentalSchema.create(payload);
  }

  async findRental(query, options) {
    return rentalSchema.paginate(query, { page: 1, limit: 20 }, options);
  }

  async findRentalById(id) {
    return rentalSchema.findById(id);
  }

  async updateRental(id, body) {
    return rentalSchema.findByIdAndUpdate(id, body);
  }

  async deleteRental(id) {
    return rentalSchema.findByIdAndDelete(id);
  }
}

module.exports = new RentalRepository();
