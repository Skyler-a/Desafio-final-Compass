const joi = require('joi').extend(require('@joi/date'));
const { id } = require('../utils/regex');

const reservePost = joi.object({
  id_user: joi.string().regex(id).message('Your id is out-standard').required(),
  data_start: joi.date().format('DD/MM/YYYY').required(),
  data_end: joi.date().format('DD/MM/YYYY').required(),
  id_car: joi.string().regex(id).message('Your id is out-standard').required(),
  id_rental: joi.string().regex(id).message('Your id is out-standard').required(),
  final_value: joi.number()
});

const reservePut = joi.object({
  id_user: joi.string().regex(id).message('Your id is out-standard'),
  data_start: joi.date().format('DD/MM/YYYY'),
  data_end: joi.date().format('DD/MM/YYYY'),
  id_car: joi.string().regex(id).message('Your id is out-standard'),
  id_rental: joi.string().regex(id).message('Your id is out-standard'),
  final_value: joi.number()
});

const reserveGet = joi.object({
  id_user: joi.string().regex(id).message('Your id is out-standard'),
  data_start: joi.date().format('DD/MM/YYYY'),
  data_end: joi.date().format('DD/MM/YYYY'),
  id_car: joi.string().regex(id).message('Your id is out-standard'),
  id_rental: joi.string().regex(id).message('Your id is out-standard'),
  final_value: joi.number()
});

module.exports = { reservePost, reservePut, reserveGet };
