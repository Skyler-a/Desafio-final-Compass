const mongoose = require("mongoose");
const bcript = require("bcryptjs");

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

personSchema.pre("save", async function (next) {
    const hash = await bcript.hash(this.password, 10);
    this.password = hash;

    next();
});

const person = mongoose.model('person', personSchema)
module.exports = person;