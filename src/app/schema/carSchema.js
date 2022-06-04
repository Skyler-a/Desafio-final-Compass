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
        type: String,
        required: true
    }],
    passengersQtd: {
        type: Number,
        required: true
    }
}, {
    timestamps: false
})

const car = mongoose.model('car', carSchema)
module.exports = car