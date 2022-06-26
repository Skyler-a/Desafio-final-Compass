const joi = require('joi');

const carPost = joi.object({
  model: joi.string().required(),
  type: joi.string().required(),
  brand: joi.string().required(),
  year: joi.number().min(1950).max(2022).required(),
  color: joi.string().required(),
  accessories: joi
    .array()
    .min(1)
    .unique()
    .items(
      joi.object({
        description: joi.string().required()
      })
    )
    .required(),
  passengersQtd: joi.number().min(3).required()
});

const carUpdate = joi.object({
  model: joi.string(),
  type: joi.string(),
  brand: joi.string(),
  year: joi.number().min(1950).max(2022),
  color: joi.string(),
  accessories: joi
    .array()
    .min(1)
    .unique()
    .items(
      joi.object({
        description: joi.string()
      })
    ),
  passengersQtd: joi.number().min(3)
});

module.exports = { carPost, carUpdate };
