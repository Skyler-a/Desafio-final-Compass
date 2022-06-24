const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const rentalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cnpj: {
      type: String,
      unique: true,
      required: true,
    },
    activities: {
      type: String,
      required: true,
    },
    address: [
      {
        cep: {
          type: String,
          required: true,
        },
        number: {
          type: String,
          required: true,
        },
        isFilial: {
          type: String,
          required: true,
          enum: {
            values: ["true", "false"],
            message: "isFilial must be true or false",
          },
        },
        street: {
          type: String,
        },
        complement: {
          type: String,
        },
        neighborhood: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        _ID: false,
      },
    ],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);
rentalSchema.plugin(paginate);
const rental = mongoose.model("rental", rentalSchema);
module.exports = rental;
