const carSchema = require('../schema/carSchema');

class carRepository {
    async createCar(payload) {
        return carSchema.create(payload);
    }
    async findCar(query, options) {
        return carSchema.paginate(query, { page: 1, limit: 20 }, options);
    }
    async findCarById(payload) {
        return carSchema.findById(payload);
    }
    async deleteCar(payload) {
        return carSchema.findByIdAndDelete(payload);
    }
    async updateCar(id, body) {
        return carSchema.findByIdAndUpdate(id, body);
    }
    async updateAcessoriesById(accessorieId, body) {
        console.log("iae")
        return carSchema.findOneAndUpdate(
            { 'accessories._id': accessorieId },
            { $set: { "accessories.$.description": body.description } });
    }
}
module.exports = new carRepository();