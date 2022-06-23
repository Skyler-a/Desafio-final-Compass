const personRepository = require('../repository/personRepository');


async function validateUserDrive(idPerson) {
    if (idPerson) {
        const result = await personRepository.findPersonById(idPerson);
        const { canDrive } = result;
        if (canDrive == "no") {
            console.log("ali2")
        }
    }
}
module.exports = validateUserDrive;