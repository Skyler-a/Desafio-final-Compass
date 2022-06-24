const joi = require("joi");
const BadRequest = require("../errors/badRequest");

const carPost = joi.object({
  model: joi.string().required(),
  type: joi.string().required(),
  brand: joi.string().required(),
  year: joi.number().min(1950).max(2022).error(new BadRequest()).required(),
  color: joi.string().required(),
  accessories: joi
    .array()
    .min(1)
    .unique()
    .items(
      joi.object({
        description: joi.string().required(),
      })
    )
    .error(new BadRequest())
    .required(),
  passengersQtd: joi.number().min(3).error(new BadRequest()).required(),
});

module.exports = async (req, res, next) => {
  const reqBody = req.body;
  try {
    await carPost.validateAsync({ ...reqBody });
    return next();
  } catch (error) {
    return res.status(error.status).json({
      error: error.message,
    });
  }
};
