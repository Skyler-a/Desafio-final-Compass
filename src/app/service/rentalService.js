const rentalRepository = require('../repository/rentalRepository');
const getCep = require('../utils/callCepApi');
const notFound = require('../utils/notFound');

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
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
    async updateRental(id, body) {
        const result = await rentalRepository.updateRental(id, body)
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
    async deleteRental(id) {
        const result = await rentalRepository.deleteRental(id)
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
}
module.exports = new rentalService();