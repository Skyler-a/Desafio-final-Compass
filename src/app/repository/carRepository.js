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
}
module.exports = new carRepository();