const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema(
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

const membershipModel = new mongoose.model("core", membershipSchema);
module.exports = membershipModel;
