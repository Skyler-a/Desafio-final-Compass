const joi = require('joi');
const enums = require('../utils/enums');

const fleetPost = joi.object({
  id_car: joi.string().required(),
  id_rental: joi.string().required(),
  status: joi
    .string()
    .valid(...enums.status)
    .required(),
  daily_value: joi.number().required(),
  plate: joi.string().required()
});

const fleetUpdate = joi.object({
  id_car: joi.string(),
  id_rental: joi.string(),
  status: joi.string().valid(...enums.status),
  daily_value: joi.number(),
  plate: joi.string()
});

module.exports = { fleetPost, fleetUpdate };
