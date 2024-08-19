const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  guardianName: {
    type: String,
    required: true,
  },
  guardianNumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const studentData = new mongoose.model("student", studentSchema);

module.exports = studentData;
