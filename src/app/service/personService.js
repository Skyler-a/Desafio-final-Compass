const personRepository = require('../repository/personRepository');

class personService {
    async createPerson(payload) {
        const result = await personRepository.createPerson(payload)
        return result
    }
    async findPerson(payload) {
        const result = await personRepository.findPerson(payload)
        return result
    }
    async findPersonById(payload) {
        const result = await personRepository.findPersonById(payload)
        return result
    }
    async deletePerson(payload) {
        const result = await personRepository.deletePerson(payload)
        return result
    }
    async updatePerson(id, body) {
        const result = await personRepository.updatePerson(id, body);
        return result
    }
}
module.exports = new personService();