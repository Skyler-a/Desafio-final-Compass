const joi = require('joi');
const moment = require('moment');
const validateCpf = require('../utils/validateCpf');

const personPost = joi.object({
  name: joi.string().min(4).required(),
  cpf: joi.string().required(),
  birthDay: joi.date().format('DD/MM/YYYY').required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  canDrive: joi.string().valid('yes', 'no').required()
});

module.exports = async (req, res, next) => {
  try {
    const reqBody = req.body;
    const birthDay = moment(reqBody.birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const birthDayIsInvalid = moment().diff(birthDay, 'years', false) < 18;

    if (birthDayIsInvalid) {
      return res.status(400).json({
        message: 'Your age must be at least 18 years old'
      });
    }

    if (!validateCpf(reqBody.cpf)) {
      return res.status(400).json({
        message: 'Your cpf is invalid'
      });
    }

    await personPost.validateAsync({ ...reqBody });
    return next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
