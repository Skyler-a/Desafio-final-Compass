const personSchema = require('../schema/personSchema');

class AuthRepository {
  async login(email) {
    return personSchema.findOne({ email }).select('+password');
  }
}
module.exports = new AuthRepository();
