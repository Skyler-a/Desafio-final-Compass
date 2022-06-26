const PersonRepository = require('../repository/personRepository');
const NotFound = require('../errors/notFound');
const BadRequest = require('../errors/badRequest');
const validateCpf = require('../utils/validateCpf');
const validateBirthDay = require('../utils/validateBirthDay');

class PersonService {
  async createPerson(payload) {
    const cpfValidation = await validateCpf(payload.cpf);
    if (cpfValidation === false) throw new BadRequest('Invalid Cpf');
    await validateBirthDay(payload.birthDay);
    const result = await PersonRepository.createPerson(payload);
    return result;
  }

  async findPerson(payload, options) {
    const { name, cpf, birthDay, email, canDrive } = payload;
    const query = {
      name: new RegExp(name),
      cpf: new RegExp(cpf),
      birthDay: new RegExp(birthDay),
      email: new RegExp(email),
      canDrive: new RegExp(canDrive)
    };
    const result = await PersonRepository.findPerson(query, options);
    return result;
  }

  async findPersonById(payload) {
    const result = await PersonRepository.findPersonById(payload);
    if (result == null) {
      throw new NotFound('id');
    }
    return result;
  }

  async deletePerson(payload) {
    const result = await PersonRepository.deletePerson(payload);
    if (result == null) {
      throw new NotFound('id');
    }
    return result;
  }

  async updatePerson(id, body) {
    const cpfValidation = await validateCpf(body.cpf);
    if (cpfValidation === false) throw new BadRequest('Invalid Cpf');
    await validateBirthDay(body.birthDay);
    const result = await PersonRepository.updatePerson(id, body);
    if (result == null) {
      throw new NotFound('id');
    }
    return result;
  }
}
module.exports = new PersonService();
