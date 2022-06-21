const rentalRepository = require('../repository/rentalRepository');

class validationRental {
    async validateRentalIdPost(id_rental, fleetId) {
        const rental = await rentalRepository.findRentalById(id_rental)
        const rentalParam = await rentalRepository.findRentalById(fleetId)
        if (!rental || !rentalParam) {
            return false
        } else {
            return true
        }
    }
    async validateRentalIdGet(id_rental) {
        const rental = await rentalRepository.findRentalById(id_rental)
        if (!rental) {
            return false
        } else {
            return true
        }
    }

}
module.exports = new validationRental();