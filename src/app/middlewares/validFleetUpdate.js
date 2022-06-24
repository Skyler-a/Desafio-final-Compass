const joi = require('joi');
const enums = require('../utils/enums');

const fleetUpdate = joi.object({
  id_car: joi.string(),
  id_rental: joi.string(),
  status: joi.string().valid(...enums.status),
  daily_value: joi.number(),
  plate: joi.string()
});

module.exports = async (req, res, next) => {
  try {
    const { error } = await fleetUpdate.validateAsync(req.body, { abortEarly: false });
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
