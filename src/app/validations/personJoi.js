const joi = require('joi').extend(require('@joi/date'));
const enums = require('../utils/enums');

const personPost = joi.object({
  name: joi.string().min(4).required(),
  cpf: joi.string().required(),
  birthDay: joi.date().format('DD/MM/YYYY').required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  canDrive: joi
    .string()
    .valid(...enums.canDrive)
    .required()
});

const personPut = joi.object({
  name: joi.string().min(4),
  cpf: joi.string(),
  birthDay: joi.date().format('DD/MM/YYYY'),
  email: joi.string().email(),
  password: joi.string().min(6),
  canDrive: joi.string().valid(...enums.canDrive)
});

module.exports = { personPost, personPut };
