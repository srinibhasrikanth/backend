const eventModel = require("../model/eventModel");
const registerModel = require("../model/registerModel");

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
  try {
    const event = await registerModel.find({ eventId: id });

    if (!event) {
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
