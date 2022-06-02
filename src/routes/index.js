const { Router } = require('express')
const carros = require('./CarRoutes')

module.exports = (server) => {
    server.use((req, res, next) => {
        carros(server, new Router());
        next();
    })
}