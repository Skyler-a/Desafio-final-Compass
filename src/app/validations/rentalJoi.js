const joi = require('joi');
const enums = require('../utils/enums');

const rentalPost = joi.object({
  name: joi.string().required(),
  cnpj: joi.string().required(),
  activities: joi.string().required(),
  address: joi
    .object({
      cep: joi.string().required(),
      number: joi.string().required(),
      isFilial: joi
        .string()
        .valid(...enums.isFilial)
        .required()
    })
    .min(1)
    .required()
});

const rentalUpdate = joi.object({
  name: joi.string(),
  cnpj: joi.string(),
  activities: joi.string(),
  address: joi
    .object({
      cep: joi.string(),
      number: joi.string(),
      isFilial: joi.string().valid(...enums.isFilial)
    })
    .min(1)
});

module.exports = { rentalPost, rentalUpdate };
