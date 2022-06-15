const rentalRepository = require('../repository/rentalRepository');
const getCep = require('../utils/callCepApi');

class rentalService {
    async createRental(payload) {
        const informations = await getCep(payload)
        const result = await rentalRepository.createRental(informations)
        return result
    }
    async findRental(options, payload) {
        const result = await rentalRepository.findRental(options, payload)
        return result
    }
    async findRentalById(id) {
        const result = await rentalRepository.findRentalById(id)
        return result
    }
    async updateRental(id, payload) {
        const result = await rentalRepository.updateRental(id, payload)
        return result
    }
    async deleteRental(id) {
        const result = await rentalRepository.deleteRental(id)
        return result
    }
}
module.exports = new rentalService();