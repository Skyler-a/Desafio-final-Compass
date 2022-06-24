const joi = require("joi");
const BadRequest = require("../errors/badRequest");

const carUpdate = joi.object({
  model: joi.string(),
  type: joi.string(),
  brand: joi.string(),
  year: joi.number().min(1950).max(2022).error(new BadRequest()),
  color: joi.string(),
  accessories: joi
    .array()
    .min(1)
    .unique()
    .items(
      joi.object({
        description: joi.string(),
      })
    )
    .error(new BadRequest()),
  passengersQtd: joi.number().min(3).error(new BadRequest()),
});

module.exports = async (req, res, next) => {
  const reqBody = req.body;
  try {
    await carUpdate.validateAsync({ ...reqBody });
    return next();
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
