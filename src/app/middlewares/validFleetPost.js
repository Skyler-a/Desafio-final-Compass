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

module.exports = async (req, res, next) => {
  try {
    const { error } = await fleetPost.validateAsync(req.body, { abortEarly: false });
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
