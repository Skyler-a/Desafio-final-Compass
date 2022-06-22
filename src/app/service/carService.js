const carRepository = require('../repository/carRepository');
const notFound = require('../utils/notFound');

class carService {
    async createCar(payload) {
        const result = await carRepository.createCar(payload)
        return result
    }
    async findCar(payload, options) {
        const { model, type, brand, color } = payload
        const query = {
            model: new RegExp(model),
            type: new RegExp(type),
            brand: new RegExp(brand),
            color: new RegExp(color)
        }
        const result = await carRepository.findCar(query, options)
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
    async updateAcessoriesById(accessorieId, body) {
        const result = await carRepository.updateAcessoriesById(accessorieId, body)
        return result
    }
}
module.exports = new carService();