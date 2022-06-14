const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        required: true
    },
    address: [{
        cep: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        isFilial: {
            enum: {
                values: ["true", "false"],
                required: true
            }
        },
        street: {
            type: String
        },
        complement: {
            type: String
        },
        neighborhood: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        }
    }],

}, {
    timestamps: false, versionKey: false
})

const rental = mongoose.model('rental', rentalSchema)
module.exports = rental