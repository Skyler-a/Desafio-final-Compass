const reserveSchema = require('../schema/reserveSchema');

class reserveRepository {
    async createReserve(payload) {
        return reserveSchema.create(payload);
    }
    async getReserve(query) {
        return reserveSchema.find(query);
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
module.exports = new reserveRepository();