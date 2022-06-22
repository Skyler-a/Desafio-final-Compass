const moment = require('moment');
const invalidData = require('../utils/invalidData');

async function validateDateRented(data_start, data_end) {
    const dataStartValid = moment(data_start, 'DD/MM/YYYY').isSameOrBefore(moment(data_end, 'DD/MM/YYYY'), "days");
    const dataEndValid = moment(data_end, 'DD/MM/YYYY').isSameOrAfter(moment(data_start, 'DD/MM/YYYY'), "days");
    if (!dataStartValid) {
        throw new invalidData('Data de início deve ser menor ou igual a data de fim');
    }
    if (!dataEndValid) {
        throw new invalidData('Data de fim deve ser maior ou igual a data de início');
    }
}
module.exports = validateDateRented;