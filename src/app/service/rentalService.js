const rentalRepository = require('../repository/rentalRepository');
const getCep = require('./callCepApi');
const notFound = require('../errors/notFound');

class rentalService {
    async createRental(payload) {
        const informations = await getCep(payload)
        const result = await rentalRepository.createRental(informations)
        return result
    }
    async findRental(payload, options) {
        const { name, cnpj, activities } = payload
        const query = {
            name: new RegExp(name),
            cnpj: new RegExp(cnpj),
            activities: new RegExp(activities)
        }
        const result = await rentalRepository.findRental(query, options)
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