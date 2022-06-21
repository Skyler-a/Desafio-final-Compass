const reserveRepository = require('../repository/reserveRepository');
const validateCarId = require('../utils/validateIdCar');
const validateRentalId = require('../utils/validateIdRental');
const validateUserId = require('../utils/validateUserID');
const notFound = require('../utils/notFound');

class reserveService {
    async createReserve(payload, rentalId) {
        await validateCarId(payload.id_car)
        await validateRentalId(rentalId, payload.id_rental)
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
    async getReserveId(rentalId, idReserve) {
        await validateRentalId(rentalId)
        const result = await reserveRepository.getReserveId(idReserve);
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
    async updateReserve(rentalId, idReserve, payload) {
        await validateCarId(payload.id_car)
        await validateRentalId(rentalId, payload.id_rental)
        await validateUserId(payload.id_user)
        const result = await reserveRepository.updateReserve(idReserve, payload);
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
    async deleteReserve(rentalId, idReserve) {
        await validateRentalId(rentalId)
        const result = await reserveRepository.deleteReserve(idReserve);
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
}
module.exports = new reserveService();