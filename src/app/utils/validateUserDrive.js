const personRepository = require('../repository/personRepository');
const invalidDrive = require('../utils/invalidDrive');

async function validateUserDrive(idPerson) {
    if (idPerson) {
        const result = await personRepository.findPersonById(idPerson);
        const { canDrive } = result;
        if (canDrive == "no") {
            throw new invalidDrive();
        }
    }
}
module.exports = validateUserDrive;