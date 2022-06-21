const rentalRepository = require('../repository/rentalRepository');
const notFound = require('../utils/notFound');
class validationRental {
    async validateRentalIdPost(idRentalBody, idRentalParam) {
        const rental = await rentalRepository.findRentalById(idRentalBody)
        const rentalParam = await rentalRepository.findRentalById(idRentalParam)
        if (!rental || !rentalParam) {
            throw new notFound("id_rental");
        }
    }
    async validateRentalId(idRentalParam) {
        const rental = await rentalRepository.findRentalById(idRentalParam)
        if (!rental) {
            throw new notFound("id_rental");
        }
    }
    async validateRentalIdUpdate(idRentalBody, idRentalParam) {
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

}
module.exports = new validationRental();