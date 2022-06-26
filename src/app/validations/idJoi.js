const joi = require('joi');
const { id } = require('../utils/regex');

const validId = joi.object({
  id: joi.string().regex(id).message('Your Id was out-standard').required()
});

const validIdFleet = joi.object({
  id: joi.string().regex(id).message('Your Id was out-standard').required(),
  id_fleet: joi.string().regex(id).message('Your Id was out-standard')
});

const validIdReserve = joi.object({
  id: joi.string().regex(id).message('Your Id was out-standard').required(),
  id_reserve: joi.string().regex(id).message('Your Id was out-standard')
});

module.exports = { validId, validIdFleet, validIdReserve };
