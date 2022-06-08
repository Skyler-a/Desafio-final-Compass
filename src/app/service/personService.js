const personRepository = require('../repository/personRepository');
const notFound = require('../utils/notFound');
const formataCpf = require('../utils/cpfFomate');
const moment = require('moment');
class personService {
    async createPerson(payload) {
        payload.birthDay = moment(payload.birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const result = await personRepository.createPerson(payload)
        return result
    }
    async findPerson(payload) {
        const result = await personRepository.findPerson(payload)
        formataCpf(result);
        return result
    }
    async findPersonById(payload) {
        const result = await personRepository.findPersonById(payload)
        if (result == null) {
            throw new notFound("id");
        }
        formataCpf(result);
        return result
    }
    async deletePerson(payload) {
        const result = await personRepository.deletePerson(payload)
        if (result == null) {
            throw new notFound("id");
        }
        formataCpf(result);
        return result
    }
    async updatePerson(id, body) {
        body.birthDay = moment(body.birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const result = await personRepository.updatePerson(id, body);
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
}
module.exports = new personService();