const joi = require('joi');
const enums = require('../utils/enums');
const { cep, cnpj } = require('../utils/regex');

const rentalPost = joi.object({
  name: joi.string().required(),
  cnpj: joi.string().regex(cnpj).message('Invalid cep format. Try: 00.000.000/0000-00').required(),
  activities: joi.string().required(),
  address: joi
    .object({
      cep: joi.string().regex(cep).message('Invalid cep format. Try: 00000-000').required(),
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
  cnpj: joi.string().regex(cnpj).message('Invalid cep format'),
  activities: joi.string(),
  address: joi
    .object({
      cep: joi.string().regex(cep).message('Invalid cep format'),
      number: joi.string(),
      isFilial: joi.string().valid(...enums.isFilial)
    })
    .min(1)
});

const rentalGet = joi.object({
  name: joi.string(),
  cnpj: joi.string().regex(cnpj).message('Invalid cep format'),
  activities: joi.string()
});

module.exports = { rentalPost, rentalUpdate, rentalGet };
