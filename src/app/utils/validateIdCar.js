const carRepository = require('../repository/carRepository')

async function validateCarId(id_car) {
    const car = await carRepository.findCarById(id_car)
    if (car == null) {
        return false
    } else {
        return true
    }
}
module.exports = validateCarId;