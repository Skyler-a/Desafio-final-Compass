const carRepository = require("../repository/carRepository");
const NotFound = require("../errors/notFound");

async function validateCarId(id_car) {
  if (id_car) {
    const car = await carRepository.findCarById(id_car);
    if (!car) {
      throw new NotFound("id_car");
    }
  }
}
module.exports = validateCarId;
