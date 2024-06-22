const eventModel = require("../model/eventModel");
const registerModel = require("../model/registerModel");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const registerStudent = async (req, res) => {
  const { id } = req.body; // The event ID from the request body
  const { studentName, rollNumber, phoneNumber, email, branch, year, section } =
    req.body;

  try {
    const event = await eventModel.findById(id);
    if (!event) {
      return res.status(404).send("Event not found");
    }

    const registration = new registerModel({
      studentName,
      rollNumber,
      phoneNumber,
      email,
      branch,
      year,
      section,
      eventId: id,
    });

    await registration.save();
    res.status(201).send(registration);
  } catch (error) {
    res.status(500).send("Error registering student");
  }
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const object = new ObjectId(id); // Convert id string to ObjectId
    console.log(object);

    const event = await registerModel.find({ eventId: object });

    if (!event || event.length === 0) {
      // If event is not found, return a 404 status
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json(event);
  } catch (error) {
    // Log the error to help with debugging
    console.error("Error fetching event:", error);

    res.status(500).json({
      success: false,
      message: "Error fetching event",
      error: error.message,
    });
  }
};

module.exports = { registerStudent, getStudent };
