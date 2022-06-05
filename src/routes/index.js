const { Router } = require('express')
const carros = require('./CarRoutes')
const pessoas = require('./PersonRoutes')

module.exports = (server) => {
    server.use((req, res, next) => {
        carros(server, new Router());
        pessoas(server, new Router());
        next();
    })
}