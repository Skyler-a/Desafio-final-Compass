const fleetSchema = require('../schema/fleetSchema');

class fleetRepository {
    async createFleet(payload) {
        return fleetSchema.create(payload)
    }
    async getFleet(query, options) {
        return fleetSchema.paginate(query, { page: 1, limit: 20, offset: 0 }, options)
    }
    async getFleetById(id_fleet) {
        return fleetSchema.findById(id_fleet)
    }
    async updateFleet(idFleet, payload) {
        return fleetSchema.findByIdAndUpdate(idFleet, payload)
    }
    async deleteFleet(idFleet) {
        return fleetSchema.findByIdAndDelete(idFleet)
    }
}
module.exports = new fleetRepository();