const rentalRepository = require('../repository/rentalRepository');
const notFound = require('../utils/notFound');
class validationRental {
    async validateRentalIdPost(idRentalBody, id) {
        const rental = await rentalRepository.findRentalById(idRentalBody)
        const rentalParam = await rentalRepository.findRentalById(id)
        if (!rental || !rentalParam) {
            throw new notFound("id_rental");
        }
    }
    async validateRentalId(id) {
        const rental = await rentalRepository.findRentalById(id)
        if (!rental) {
            throw new notFound("id_rental");
        }
    }
    async validateRentalIdUpdate(idRentalBody, id) {
        if (idRentalBody) {
            const rental = await rentalRepository.findRentalById(idRentalBody)
            const rentalParam = await rentalRepository.findRentalById(id)
            if (!rental || !rentalParam) {
                throw new notFound("id_rental");
            }
        }
        if (id) {
            const rental = await rentalRepository.findRentalById(id)
            if (!rental) {
                throw new notFound("id_rental");
            }
        }
    }

}
module.exports = new validationRental();