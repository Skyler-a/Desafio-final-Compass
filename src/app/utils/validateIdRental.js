const rentalRepository = require('../repository/rentalRepository');
const notFound = require('../utils/notFound');

async function validateRentalId(idRentalParam, idRentalBody) {
    if (idRentalBody) {
        const rental = await rentalRepository.findRentalById(idRentalBody)
        const rentalParam = await rentalRepository.findRentalById(idRentalParam)
        if (!rental || !rentalParam) {
            throw new notFound("id_rental");
        }
    }
    if (idRentalParam) {
        const rental = await rentalRepository.findRentalById(idRentalParam)
        if (!rental) {
            throw new notFound("id_rental");
        }
    }
}

module.exports = validateRentalId;