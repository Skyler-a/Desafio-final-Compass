const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repository/authRepository');
const authConfig = require('../config/auth.json');
const formataCpf = require('../utils/cpfFomate');

class AuthService {
  async login(email, password) {
    const result = await AuthRepository.login(email, password);
    if (!result) {
      throw new Error('user not found');
    }
    if (!(await bcript.compare(password, result.password))) {
      throw new Error('password incorrect');
    }
    result.password = undefined;
    const token = jwt.sign({ id: result.id }, authConfig.secret, {
      expiresIn: 86400
    });
    formataCpf(result);
    return { result, token };
  }
}
module.exports = new AuthService();
