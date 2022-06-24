const PersonRepository = require("../repository/personRepository");
const NotFound = require("../errors/notFound");
const formataCpf = require("../utils/cpfFomate");

class PersonService {
  async createPerson(payload) {
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
      canDrive: new RegExp(canDrive),
    };
    const result = await PersonRepository.findPerson(query, options);
    return result;
  }

  async findPersonById(payload) {
    const result = await PersonRepository.findPersonById(payload);
    if (result == null) {
      throw new NotFound("id");
    }
    formataCpf(result);
    return result;
  }

  async deletePerson(payload) {
    const result = await PersonRepository.deletePerson(payload);
    if (result == null) {
      throw new NotFound("id");
    }
    formataCpf(result);
    return result;
  }

  async updatePerson(id, body) {
    const result = await PersonRepository.updatePerson(id, body);
    if (result == null) {
      throw new NotFound("id");
    }
    return result;
  }
}
module.exports = new PersonService();
