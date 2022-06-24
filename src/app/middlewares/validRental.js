const joi = require('joi');
const validateCNPJ = require('../utils/validateCnpj');
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

module.exports = async (req, res, next) => {
  try {
    const reqBody = req.body;

    if (!validateCNPJ(reqBody.cnpj)) {
      return res.status(400).json({
        message: 'Your cnpj is invalid'
      });
    }

    await rentalPost.validateAsync({ ...reqBody });
    return next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
