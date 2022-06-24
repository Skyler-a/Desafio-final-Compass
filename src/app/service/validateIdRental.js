const rentalRepository = require("../repository/rentalRepository");
const NotFound = require("../errors/notFound");

async function validateRentalId(idRentalParam, idRentalBody) {
  if (idRentalBody) {
    const rental = await rentalRepository.findRentalById(idRentalBody);
    const rentalParam = await rentalRepository.findRentalById(idRentalParam);
    if (!rental || !rentalParam) {
      throw new NotFound("id_rental");
    }
  }
  if (idRentalParam) {
    const rental = await rentalRepository.findRentalById(idRentalParam);
    if (!rental) {
      throw new NotFound("id_rental");
    }
  }
}

module.exports = validateRentalId;
