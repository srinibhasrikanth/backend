const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
});

const registerModel = new mongoose.model("registration", registerSchema);
module.exports = registerModel;
