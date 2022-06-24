/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
const authService = require('../service/authService');

class authController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.setHeader('token', result.token), res.status(200).json(result.token);
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
module.exports = new authController();
