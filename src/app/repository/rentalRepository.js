const rentalSchema = require('../schema/rentalSchema');

class rentalRepository {
    async createRental(payload) {
        return rentalSchema.create(payload);
    }
}

module.exports = new rentalRepository();