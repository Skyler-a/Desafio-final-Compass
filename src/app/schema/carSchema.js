const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({

    model: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    accessories: [{
        description: {
            type: String,
            required: true,
            unique: true
        }
    }],
    passengersQtd: {
        type: Number,
        required: true
    }
}, {
    timestamps: false, versionKey: false
})

const car = mongoose.model('car', carSchema)
module.exports = car