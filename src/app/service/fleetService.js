const fleetRepository = require('../repository/fleetRepository');
const validateCarId = require('../utils/validateIdCar');
const validateRentalId = require('../utils/validateIdRental');
const notFound = require('../utils/notFound');
class fleetService {
    async createFleet(payload, id) {
        await validateCarId(payload.id_car)
        await validateRentalId(id, payload.id_rental)
        const result = await fleetRepository.createFleet(payload)
        return result
    }
    async getFleet(payload, id, options) {
        const { status, plate, id_car, daily_value } = payload;
        await validateRentalId(id)
        const query = {
            status: new RegExp(status),
            plate: new RegExp(plate),
            id_rental: id
        }
        if (id_car) query.id_car = id_car;
        if (daily_value) query.final_value = daily_value;
        const result = await fleetRepository.getFleet(query, options)
        return result
    }
    async getFleetById(id, id_fleet) {
        await validateRentalId(id)
        const result = await fleetRepository.getFleetById(id_fleet)
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
    async updateFleet(id, idFleet, payload) {
        await validateCarId(payload.id_car)
        await validateRentalId(id, payload.id_rental)
        const result = await fleetRepository.updateFleet(idFleet, payload)
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
    async deleteFleet(id, idFleet) {
        await validateRentalId(id)
        const result = await fleetRepository.deleteFleet(idFleet)
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
}
module.exports = new fleetService();