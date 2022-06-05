const personRepository = require('../repository/personRepository');
const notFound = require('../utils/notFound');
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
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
    async deletePerson(payload) {
        const result = await personRepository.deletePerson(payload)
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
    async updatePerson(id, body) {
        const result = await personRepository.updatePerson(id, body);
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
}
module.exports = new personService();