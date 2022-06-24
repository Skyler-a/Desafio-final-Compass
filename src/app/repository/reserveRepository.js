const reserveSchema = require('../schema/reserveSchema');

class ReserveRepository {
  async createReserve(payload) {
    return reserveSchema.create(payload);
  }

  async getReserve(query, options) {
    return reserveSchema.paginate(query, { page: 1, limit: 20, offset: 0 }, options);
  }

  async getReserveId(idReserve) {
    return reserveSchema.findById(idReserve);
  }

  async updateReserve(idReserve, payload) {
    return reserveSchema.findByIdAndUpdate(idReserve, payload);
  }

  async deleteReserve(idReserve) {
    return reserveSchema.findByIdAndDelete(idReserve);
  }
}
module.exports = new ReserveRepository();
