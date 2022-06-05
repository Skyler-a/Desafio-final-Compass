const personSchema = require('../schema/personSchema');

class carRepository {
    async createPerson(payload) {
        return personSchema.create(payload);
    }
    async findPerson(payload) {
        return personSchema.find(payload);
    }
    async findPersonById(payload) {
        return personSchema.findById(payload);
    }
    async deletePerson(payload) {
        return personSchema.findByIdAndDelete(payload);
    }
    async updatePerson(id, body) {
        return personSchema.findByIdAndUpdate(id, body);
    }
}
module.exports = new carRepository();