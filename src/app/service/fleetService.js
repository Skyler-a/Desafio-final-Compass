const fleetRepository = require('../repository/fleetRepository');

class fleetService {
    async createFleet(payload, fleetId) {
        const result = await fleetRepository.createFleet(payload)
        return result
    }
    async getFleet(payload, id) {
        const { status, plate } = payload;
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
}
module.exports = new fleetService();