const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    birthDay: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    canDrive: {
        type: String,
        enum: {
            values: ["yes", "no"],
            required: true
        }
    }
}, {
    timestamps: false, versionKey: false
});

const person = mongoose.model('person', personSchema)
module.exports = person;