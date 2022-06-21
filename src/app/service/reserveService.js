const reserveRepository = require('../repository/reserveRepository');

class reserveService {
    async createReserve(payload) {
        const result = await reserveRepository.createReserve(payload);
        return result
    }
}
module.exports = new reserveService();