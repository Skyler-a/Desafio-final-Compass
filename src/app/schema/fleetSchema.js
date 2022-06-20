const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const fleetSchema = new mongoose.Schema({
    id_car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "car",
        required: true
    },
    id_rental: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rental",
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["available", "unavailable", "rented"]
        }
    },
    daily_value: {
        type: Number,
        required: true
    },
    plate: {
        type: String,
        required: true
    }
},
    { timestamps: false, versionKey: false }
);

fleetSchema.plugin(mongoosePaginate);

const fleet = mongoose.model("fleet", fleetSchema);

module.exports = fleet;