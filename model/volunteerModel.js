const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    rollNumber: {
      type: String,
    },
    studentName: {
      type: String,
    },
    acmMembershipId: {
      type: String,
    },
    position: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    section: {
      type: String,
    },
    batch: {
      type: String,
    },
  },
  { timestamps: true }
);

const volunteerModel = new mongoose.model("core", volunteerSchema);
module.exports = volunteerModel;
