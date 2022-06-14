const rentalRepository = require('../repository/rentalRepository');

class rentalService {
    async createRental(payload) {
        const result = await rentalRepository.createRental(payload)
        return result
    }
    async findRental(payload) {
        const result = await rentalRepository.findRental(payload)
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