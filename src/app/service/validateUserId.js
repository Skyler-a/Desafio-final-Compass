const personRepository = require("../repository/personRepository");
const NotFound = require("../errors/notFound");

async function validatePersonId(idPerson) {
  if (idPerson) {
    const result = await personRepository.findPersonById(idPerson);
    if (!result) {
      throw new NotFound("id_person");
    }
  }
}
module.exports = validatePersonId;
