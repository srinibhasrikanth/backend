const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    rollNumber: {
      type: String,
    },
    studentName: {
      type: String,
    },
    domain: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    batch: {
      type: String,
    },
  },
  { timestamps: true }
);

const volunteerModel = new mongoose.model("volunteer", volunteerSchema);
module.exports = volunteerModel;
