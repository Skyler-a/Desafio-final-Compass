const joi = require('joi').extend(require('@joi/date'));

const reservePost = joi.object({
  id_user: joi.string().required(),
  data_start: joi.date().format('DD/MM/YYYY').required(),
  data_end: joi.date().format('DD/MM/YYYY').required(),
  id_car: joi.string().required(),
  id_rental: joi.string().required(),
  final_value: joi.number()
});

const reservePut = joi.object({
  id_user: joi.string(),
  data_start: joi.date().format('DD/MM/YYYY'),
  data_end: joi.date().format('DD/MM/YYYY'),
  id_car: joi.string(),
  id_rental: joi.string(),
  final_value: joi.number()
});

module.exports = { reservePost, reservePut };
