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

module.exports = async (req, res, next) => {
  try {
    const { error } = await rentalPost.validateAsync(req.body, { abortEarly: false });
    if (error) throw new Error();
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        description: detail.message,
        name: detail.path.join('.')
      }))
    );
  }
};
