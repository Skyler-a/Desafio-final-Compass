const CarController = require('../app/controllers/carController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.get("", (req, res) => {
        res.json({ message: 'Hello World' })
    })
    server.use(prefix, routes);
}