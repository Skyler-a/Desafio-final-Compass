const joi = require('joi');

const fleetPost = joi.object({
  id_car: joi.string().required(),
  id_rental: joi.string().required(),
  status: joi.string().valid('available', 'unavailable', 'rented').required(),
  daily_value: joi.number().required(),
  plate: joi.string().required()
});

module.exports = async (req, res, next) => {
  const reqBody = req.body;
  try {
    await fleetPost.validateAsync({ ...reqBody });
    return next();
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }
};
