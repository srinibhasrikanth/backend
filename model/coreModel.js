const mongoose = require("mongoose");

const coreSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const coreModel = new mongoose.model("core", coreSchema);
module.exports = coreModel;
