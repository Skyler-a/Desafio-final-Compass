const joi = require('joi').extend(require('@joi/date'));

const reservePost = joi.object({
  id_user: joi.string(),
  data_start: joi.date().format('DD/MM/YYYY'),
  data_end: joi.date().format('DD/MM/YYYY'),
  id_car: joi.string(),
  id_rental: joi.string(),
  final_value: joi.number()
});

module.exports = async (req, res, next) => {
  try {
    const { error } = await reservePost.validateAsync(req.body, { abortEarly: false });
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
