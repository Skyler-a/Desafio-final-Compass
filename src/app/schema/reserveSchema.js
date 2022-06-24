const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const reserveSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "person",
      required: true,
    },
    data_start: {
      type: String,
      required: true,
    },
    data_end: {
      type: String,
      required: true,
    },
    id_car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "car",
      required: true,
    },
    id_rental: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rental",
      required: true,
    },
    final_value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
);

reserveSchema.plugin(mongoosePaginate);

const reserve = mongoose.model("reserve", reserveSchema);

module.exports = reserve;
