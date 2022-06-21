const reserveRepository = require('../repository/reserveRepository');

class reserveService {
    async createReserve(payload) {
        const result = await reserveRepository.createReserve(payload);
        return result
    }
    async getReserve(rentalId, payload) {
        const { data_start, data_end, id_car, final_value, id_user } = payload;
        const query = {
            id_rental: rentalId,
            data_start: new RegExp(data_start),
            data_end: new RegExp(data_end),
        }
        const result = await reserveRepository.getReserve(query);
        return result
    }
    async getReserveId(idReserve) {
        const result = await reserveRepository.getReserveId(idReserve);
        return result
    }
    async updateReserve(idReserve, payload) {
        const result = await reserveRepository.updateReserve(idReserve, payload);
        return result
    }
    async deleteReserve(idReserve) {
        const result = await reserveRepository.deleteReserve(idReserve);
        return result
    }
}
module.exports = new reserveService();