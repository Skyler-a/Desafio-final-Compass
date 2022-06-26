const joi = require('joi');
const { id } = require('../utils/regex');

const validId = joi.object({
  id: joi.string().regex(id).message('Your Id was out-standard').required()
});

module.exports = validId;
