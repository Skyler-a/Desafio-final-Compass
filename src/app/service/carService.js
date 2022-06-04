const carRepository = require('../repository/carRepository');

class carService {
    async createCar(payload) {
        const result = await carRepository.createCar(payload)
        return result
    }
    async findCar(payload) {
        const result = await carRepository.findCar(payload)
        return result
    }
    async findCarById(payload) {
        const result = await carRepository.findCarById(payload)
        return result
    }
}
module.exports = new carService();