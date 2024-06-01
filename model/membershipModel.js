const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema(
  {
    rollNumber: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    year: {
      type: String,
    },
    department: {
      type: String,
    },
    section: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    paymentMode: {
      type: String,
    },
    paidTo: {
      type: String,
    },
    paymentDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const membershipModel = new mongoose.model("core", membershipSchema);
module.exports = membershipModel;
