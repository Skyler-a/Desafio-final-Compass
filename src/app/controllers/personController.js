const personService = require('../service/personService');

class personController {
    async createPerson(req, res) {
        try {
            const result = await personService.createPerson(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async findPerson(req, res) {
        const payload = req.query;
        try {
            const result = await personService.findPerson(payload);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async findPersonById(req, res) {
        try {
            const result = await personService.findPersonById(req.params.id);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async deletePerson(req, res) {
        try {
            const result = await personService.deletePerson(req.params.id);
            return res.status(200).json(result)
        } catch {
            return res.status(500).json(error)
        }
    }
    async updatePerson(req, res) {
        try {
            const result = await personService.updatePerson(req.params.id, req.body);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}
module.exports = new personController();