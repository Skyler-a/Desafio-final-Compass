const personSchema = require('../schema/personSchema');

class personRepository {
    async createPerson(payload) {
        return personSchema.create(payload);
    }
    async findPerson(payload, options) {
        return personSchema.paginate(payload, { limit: 20 }, options);
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
module.exports = new personRepository();