const rentalRepository = require('../repository/rentalRepository');

async function validateRentalId(id_rental, fleetId) {
    const rental = await rentalRepository.findRentalById(id_rental)
    const rentalParam = await rentalRepository.findRentalById(fleetId)

    if (rental || rentalParam == null) {
        return false
    } else {
        return true
    }
} module.exports = validateRentalId;