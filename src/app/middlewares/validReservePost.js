const joi = require('joi').extend(require('@joi/date'));

const reservePost = joi.object({
  id_user: joi.string().required(),
  data_start: joi.date().format('DD/MM/YYYY').required(),
  data_end: joi.date().format('DD/MM/YYYY').required(),
  id_car: joi.string().required(),
  id_rental: joi.string().required(),
  final_value: joi.number()
});

module.exports = async (req, res, next) => {
  const reqBody = req.body;
  try {
    await reservePost.validateAsync({ ...reqBody });
    return next();
  } catch (error) {
    return res.status(400).json({
      error: error.message
    });
  }
};
