const mongoose = require("mongoose");

const FreeSourceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  sourceType: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
});

const FreeSource = mongoose.model("FreeSource", FreeSourceSchema);

module.exports = FreeSource;
