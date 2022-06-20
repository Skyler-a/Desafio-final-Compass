const fleetRepository = require('../repository/fleetRepository');

class fleetService {
    async createFleet(payload) {
        const result = await fleetRepository.createFleet(payload)
        return result
    }
}
modules.exports = new fleetService();