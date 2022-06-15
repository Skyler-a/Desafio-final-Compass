const rentalSchema = require('../schema/rentalSchema');

class rentalRepository {
    async createRental(payload) {
        return rentalSchema.create(payload);
    }
    async findRental(payload, options) {
        return rentalSchema.paginate({}, options);
    }
    async findRentalById(id) {
        return rentalSchema.findById(id);
    }
    async updateRental(id, payload) {
        return rentalSchema.findByIdAndUpdate(id, payload);
    }
    async deleteRental(id) {
        return rentalSchema.findByIdAndDelete(id);
    }
}

module.exports = new rentalRepository();