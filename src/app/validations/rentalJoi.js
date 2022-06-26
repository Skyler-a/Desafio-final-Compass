const joi = require('joi');
const enums = require('../utils/enums');
const { cnpj } = require('../utils/regex');
const { cep } = require('../utils/regex');

const rentalPost = joi.object({
  name: joi.string().required(),
  cnpj: joi.string().regex(cnpj).message('Invalid cnpj format').required(),
  activities: joi.string().required(),
  address: joi
    .object({
      cep: joi.string().regex(cep).message('Invalid cep format').required(),
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
  cnpj: joi.string().regex(cnpj).message('Invalid cnpj format'),
  activities: joi.string(),
  address: joi
    .object({
      cep: joi.string().regex(cep).message('Invalid cep format'),
      number: joi.string(),
      isFilial: joi.string().valid(...enums.isFilial)
    })
    .min(1)
});

module.exports = { rentalPost, rentalUpdate };
