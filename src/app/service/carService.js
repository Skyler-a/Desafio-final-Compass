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
    async deleteCar(payload) {
        const result = await carRepository.deleteCar(payload)
        return result
    }
    async updateCar(id, body) {
        const result = await carRepository.updateCar(id, body);
        const res = await { message: 'Car updated successfully' }
        return result, res
    }
}
module.exports = new carService();