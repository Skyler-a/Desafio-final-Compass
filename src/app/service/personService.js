const personRepository = require('../repository/personRepository');
const notFound = require('../utils/notFound');
const formataCpf = require('../utils/cpfFomate');
const moment = require('moment');
class personService {
    async createPerson(payload) {
        const result = await personRepository.createPerson(payload)
        return result
    }
    async findPerson(payload, options) {
        const { name, cpf, birthDay, email, canDrive } = payload
        const query = {
            name: new RegExp(name),
            cpf: new RegExp(cpf),
            birthDay: new RegExp(birthDay),
            email: new RegExp(email),
            canDrive: new RegExp(canDrive)
        }
        const result = await personRepository.findPerson(query, options)
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
        const result = await personRepository.updatePerson(id, body);
        if (result == null) {
            throw new notFound("id");
        }
        return result
    }
}
module.exports = new personService();