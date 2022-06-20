const rentalSchema = require('../schema/rentalSchema');

class rentalRepository {
    async createRental(payload) {
        return rentalSchema.create(payload);
    }
    async findRental(payload, options) {
        return rentalSchema.paginate({ page: 1, limit: 20 }, options);
    }
    async findRentalById(id) {
        return rentalSchema.findById(id);
    }
    async updateRental(id, body) {
        return rentalSchema.findByIdAndUpdate(id, body);
    }
    async deleteRental(id) {
        return rentalSchema.findByIdAndDelete(id);
    }
}

module.exports = new rentalRepository();