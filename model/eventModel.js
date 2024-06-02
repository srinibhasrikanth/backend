const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  to_whom: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  resourcePerson: {
    type: String,
  },
  modeOfConduct: {
    type: String,
  },
  resourcesRequired: {
    type: String,
  },
  conductedBy: {
    type: String,
  },
  no_of_volunteers: {
    type: Number,
  },
  prize_money: {
    type: Number,
  },
  budget: {
    type: Number,
  },
  remarks: {
    type: String,
  },
  current: {
    type: String,
  },
  registration_link: {
    type: String,
  },
  feedback_link: {
    type: String,
  },
  after_event_report: {
    type: String,
  },
});

const eventModel = new mongoose.model("events", eventSchema);
module.exports = eventModel;
