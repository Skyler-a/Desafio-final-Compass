const rentalRepository = require('../repository/rentalRepository');

class rentalService {
    async createRental(payload) {
        const result = await rentalRepository.createRental(payload)
        return result
    }
}
module.exports = new rentalService();