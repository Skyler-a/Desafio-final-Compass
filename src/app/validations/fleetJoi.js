const joi = require('joi');
const { id } = require('../utils/regex');
const enums = require('../utils/enums');

const fleetPost = joi.object({
  id_car: joi.string().regex(id).message('Your id is out-standard').required(),
  id_rental: joi.string().regex(id).message('Your id is out-standard').required(),
  status: joi
    .string()
    .valid(...enums.status)
    .required(),
  daily_value: joi.number().required(),
  plate: joi.string().required()
});

const fleetUpdate = joi.object({
  id_car: joi.string().regex(id).message('Your id is out-standard'),
  id_rental: joi.string().regex(id).message('Your id is out-standard'),
  status: joi.string().valid(...enums.status),
  daily_value: joi.number(),
  plate: joi.string()
});

const fleetGet = joi.object({
  id_car: joi.string().regex(id).message('Your id is out-standard'),
  id_rental: joi.string().regex(id).message('Your id is out-standard'),
  status: joi.string().valid(...enums.status),
  daily_value: joi.number(),
  plate: joi.string()
});

module.exports = { fleetPost, fleetUpdate, fleetGet };
