const fleetRepository = require('../repository/fleetRepository');
const validateCarId = require('../utils/validateIdCar');
const validateRentalId = require('../utils/validateIdRental');
const notFound = require('../utils/notFound');
class fleetService {
    async createFleet(payload, fleetId) {
        const validationCar = await validateCarId(payload.id_car)
        const validationRental = await validateRentalId.validateRentalIdPost(payload.id_rental, fleetId)
        if (!validationRental) {
            throw new notFound("id_rental");
        }
        if (!validationCar) {
            throw new notFound("id_car");
        }
        const result = await fleetRepository.createFleet(payload)
        return result
    }
    async getFleet(payload, id) {
        const { status, plate } = payload;
        const validationRental = await validateRentalId.validateRentalIdGet(id)
        if (!validationRental) {
            throw new notFound("id_rental");
        }
        const query = {
            status: new RegExp(status),
            plate: new RegExp(plate),
            id_rental: id
        }
        const result = await fleetRepository.getFleet(query)
        return result
    }
    async getFleetById(id_fleet) {
        const result = await fleetRepository.getFleetById(id_fleet)
        return result
    }
    async updateFleet(idFleet, payload) {
        const result = await fleetRepository.updateFleet(idFleet, payload)
        return result
    }
    async deleteFleet(idFleet) {
        const result = await fleetRepository.deleteFleet(idFleet)
        return result
    }
}
module.exports = new fleetService();