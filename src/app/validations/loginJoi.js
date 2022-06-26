const joi = require('joi').extend(require('@joi/date'));

const login = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
});

module.exports = login;
