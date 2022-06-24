const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const carSchema = new mongoose.Schema(
  {
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
    accessories: [
      {
        description: {
          type: String,
          required: true
        }
      }
    ],
    passengersQtd: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);

carSchema.plugin(paginate);
const car = mongoose.model('car', carSchema);
module.exports = car;
