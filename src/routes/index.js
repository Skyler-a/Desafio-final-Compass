const { Router } = require('express')
const car = require('./CarRoutes')
const person = require('./PersonRoutes')
const auth = require('./authRoutes')
const rental = require('./rentalRoutes')
const fleet = require('./fleetRoutes')
const reserve = require('./reserveRoutes')

module.exports = (server) => {
    server.use((req, res, next) => {
        car(server, new Router());
        person(server, new Router());
        auth(server, new Router());
        rental(server, new Router());
        fleet(server, new Router());
        reserve(server, new Router());
        next();
    })
}