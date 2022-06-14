const carSchema = require('../schema/carSchema');

class carRepository {
    async createCar(payload) {
        return carSchema.create(payload);
    }
    async findCar(payload) {
        return carSchema.find(payload);
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
    async findAccessoriesById(payload) {
        return carSchema.findById(payload);
    }
}
module.exports = new carRepository();