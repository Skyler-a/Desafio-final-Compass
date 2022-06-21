const fleetSchema = require('../schema/fleetSchema');

class fleetRepository {
    async createFleet(payload) {
        return fleetSchema.create(payload)
    }
    async getFleet(query) {
        return fleetSchema.find(query)
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