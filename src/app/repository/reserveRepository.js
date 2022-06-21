const reserveSchema = require('../schema/reserveSchema');

class reserveRepository {
    async createReserve(payload) {
        return reserveSchema.create(payload);
    }
}
module.exports = new reserveRepository();