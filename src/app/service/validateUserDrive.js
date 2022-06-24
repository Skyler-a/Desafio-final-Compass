const personRepository = require('../repository/personRepository');
const BadRequest = require('../errors/badRequest');

async function validateUserDrive(idPerson) {
  if (idPerson) {
    const result = await personRepository.findPersonById(idPerson);
    const { canDrive } = result;
    if (canDrive === 'no') {
      throw new BadRequest('You can not drive');
    }
  }
}
module.exports = validateUserDrive;
