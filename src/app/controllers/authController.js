/* eslint-disable consistent-return */
/* eslint-disable no-sequences */
const AuthService = require('../service/authService');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      return res.setHeader('token', result.token), res.status(200).json(result.token);
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
module.exports = new AuthController();
