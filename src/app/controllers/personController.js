/* eslint-disable radix */
const PersonService = require('../service/personService');
const BadRequest = require('../errors/badRequest');

class PersonController {
  async createPerson(req, res) {
    try {
      const result = await PersonService.createPerson(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async findPerson(req, res) {
    const payload = req.query;
    try {
      const { page, limit } = req.query;
      const options = {
        page: parseInt(page),
        limit: parseInt(limit)
      };
      const result = await PersonService.findPerson(payload, options);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findPersonById(req, res) {
    try {
      const result = await PersonService.findPersonById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async deletePerson(req, res) {
    try {
      const result = await PersonService.deletePerson(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }

  async updatePerson(req, res) {
    try {
      const result = await PersonService.updatePerson(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        return res.status(400).json(new BadRequest(`Your id is not valid`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }
}
module.exports = new PersonController();
