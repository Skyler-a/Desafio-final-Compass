/* eslint-disable prettier/prettier */
const moment = require('moment');
const BadRequest = require('../errors/badRequest');

async function validateBirthDay(birthDay) {
  if (birthDay) {
    const formateBirthDay = moment(birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const birthDayIsInvalid = moment().diff(formateBirthDay, 'years', false) < 18;

    if (birthDayIsInvalid) {
      throw new BadRequest('You must be 18 years old to register');
    }
  }
}
module.exports = validateBirthDay;
