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

module.exports = async (req, res, next) => {
  try {
    const { error } = await personPost.validateAsync(req.body, { abortEarly: false });
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
