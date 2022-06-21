const carRepository = require('../repository/carRepository')
const notFound = require('../utils/notFound');

async function validateCarId(id_car) {
    if (id_car) {
        const car = await carRepository.findCarById(id_car)
        if (!car) {
            throw new notFound("id_car");
        }
    }
}
module.exports = validateCarId;