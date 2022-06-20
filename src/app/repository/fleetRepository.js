const fleetSchema = require('../schema/fleetSchema');

class fleetRepository {
    async createFleet(payload) {
        return fleetSchema.create(payload)
    }
}
module.exports = new fleetRepository();