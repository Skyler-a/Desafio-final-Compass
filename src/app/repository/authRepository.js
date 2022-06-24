/* eslint-disable no-unused-vars */
const personSchema = require("../schema/personSchema");

class AuthRepository {
  async login(email, password) {
    return personSchema.findOne({ email }).select("+password");
  }
}
module.exports = new AuthRepository();
