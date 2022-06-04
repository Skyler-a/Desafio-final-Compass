const carSchema = require('../schema/carSchema');

class carRepository {
    async createCar(payload) {
        return carSchema.create(payload);
    }
    async findCar(payload) {
        return carSchema.find(payload);
    }
}
module.exports = new carRepository();