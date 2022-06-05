const carRepository = require('../repository/carRepository');
const notFound = require('../utils/notFound');


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
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
    async deleteCar(payload) {
        const result = await carRepository.deleteCar(payload)
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
    async updateCar(id, body) {
        const result = await carRepository.updateCar(id, body);
        if (result == null) {
            throw new notFound("id");
        }
        const res = await { message: 'Car updated successfully' }
        return result, res
    }
}
module.exports = new carService();