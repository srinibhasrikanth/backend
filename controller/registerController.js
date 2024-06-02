const registerModel = require("../model/registerModel");

const registerStudent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = new registerModel(eventData);
    const saveEvent = await newEvent.save();
    res.status(200).json({
      success: true,
      message: "Successfully event is created",
      saveEvent,
    });
  } catch (error) {
    console.log("Error during event creation:", error); // Log the error to the console
    res.status(403).json({
      success: false,
      message: "Something went wrong, creation unsuccessful",
      error: error.message, // Send the error message in the response
    });
  }
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await registerModel.findById(id);

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
