const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  ssc_p: {
    type: Number,
    required: true
  },
  hsc_p: {
    type: Number,
    required: true
  },
  degree_p: {
    type: Number,
    required: true
  },
  prediction: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Student", StudentSchema);