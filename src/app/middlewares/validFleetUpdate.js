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
  const reqBody = req.body;
  try {
    await fleetUpdate.validateAsync({ ...reqBody });
    return next();
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }
};
