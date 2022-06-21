const fleetRepository = require('../repository/fleetRepository');
const validateCarId = require('../utils/validateIdCar');
const validateRentalId = require('../utils/validateIdRental');
const notFound = require('../utils/notFound');
class fleetService {
    async createFleet(payload, id) {
        const validationCar = await validateCarId(payload.id_car)
        await validateRentalId.validateRentalIdPost(payload.id_rental, id)
        if (!validationCar) {
            throw new notFound("id_car");
        }
        const result = await fleetRepository.createFleet(payload)
        return result
    }
    async getFleet(payload, id) {
        const { status, plate } = payload;
        await validateRentalId.validateRentalId(id)
        const query = {
            status: new RegExp(status),
            plate: new RegExp(plate),
            id_rental: id
        }
        const result = await fleetRepository.getFleet(query)
        return result
    }
    async getFleetById(id, id_fleet) {
        await validateRentalId.validateRentalId(id)
        const result = await fleetRepository.getFleetById(id_fleet)
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
    async updateFleet(id, idFleet, payload) {
        const validationCar = await validateCarId(payload.id_car)
        if (!validationCar) {
            throw new notFound("id_car");
        }
        await validateRentalId.validateRentalIdUpdate(payload.id_rental, id)
        const result = await fleetRepository.updateFleet(idFleet, payload)
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
    async deleteFleet(id, idFleet) {
        await validateRentalId.validateRentalId(id)
        const result = await fleetRepository.deleteFleet(idFleet)
        if (!result) {
            throw new notFound("id_fleet");
        }
        return result
    }
}
module.exports = new fleetService();