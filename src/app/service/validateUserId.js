const personRepository = require('../repository/personRepository');
const notFound = require('../errors/notFound');

async function validatePersonId(idPerson) {
    if (idPerson) {
        const result = await personRepository.findPersonById(idPerson);
        if (!result) {
            throw new notFound("id_person");
        }
    }
}
module.exports = validatePersonId;