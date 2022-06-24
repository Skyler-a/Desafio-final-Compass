const moment = require('moment');
const BadRequest = require('../errors/badRequest');

async function validateDateRented(data_start, data_end) {
  const dataStartValid = moment(data_start, 'DD/MM/YYYY').isSameOrBefore(moment(data_end, 'DD/MM/YYYY'), 'days');
  const dataEndValid = moment(data_end, 'DD/MM/YYYY').isSameOrAfter(moment(data_start, 'DD/MM/YYYY'), 'days');
  if (!dataStartValid) {
    throw new BadRequest('The start date must be before the end date');
  }
  if (!dataEndValid) {
    throw new BadRequest('The end date must be after the start date');
  }
}
module.exports = validateDateRented;
