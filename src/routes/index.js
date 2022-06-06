const { Router } = require('express')
const carros = require('./CarRoutes')
const pessoas = require('./PersonRoutes')
const auth = require('./authRoutes')
module.exports = (server) => {
    server.use((req, res, next) => {
        carros(server, new Router());
        pessoas(server, new Router());
        auth(server, new Router());
        next();
    })
}