const { carGet } = require('../validations/carJoi');

module.exports = async (req, res, next) => {
  try {
    const { error } = await carGet.validateAsync(req.query, { abortEarly: false });
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
