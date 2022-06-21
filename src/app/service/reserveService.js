const reserveRepository = require('../repository/reserveRepository');
const validateCarId = require('../utils/validateIdCar');
const validateRentalId = require('../utils/validateIdRental');
const validateUserId = require('../utils/validateUserID');
const notFound = require('../utils/notFound');

class reserveService {
    async createReserve(payload, id) {
        await validateCarId(payload.id_car)
        await validateRentalId(id, payload.id_rental)
        await validateUserId(payload.id_user)
        const result = await reserveRepository.createReserve(payload);
        return result
    }
    async getReserve(rentalId, payload) {
        await validateRentalId(rentalId)
        const { data_start, data_end, id_car, final_value, id_user } = payload;
        const query = {
            id_rental: rentalId,
            data_start: new RegExp(data_start),
            data_end: new RegExp(data_end),
            final_value: final_value
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