const joi = require('joi').extend(require('@joi/date'));
const enums = require('../utils/enums');

const personPut = joi.object({
  name: joi.string().min(4),
  cpf: joi.string(),
  birthDay: joi.date().format('DD/MM/YYYY'),
  email: joi.string().email(),
  password: joi.string().min(6),
  canDrive: joi.string().valid(...enums.canDrive)
});

module.exports = async (req, res, next) => {
  try {
    const { error } = await personPut.validateAsync(req.body, { abortEarly: false });
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
