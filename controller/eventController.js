//operations performed on event are: creation, updation, deletion,retrieval
const eventModel = require("../model/eventModel.js");

const createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = new eventModel(eventData);
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

const createManyEvents = async (req, res) => {
  try {
    const eventsData = req.body; // Assuming req.body is an array of event data objects

    // Validate if eventsData is an array
    if (!Array.isArray(eventsData)) {
      return res.status(400).json({
        success: false,
        message: "Request body should be an array of event data objects",
      });
    }

    const savedEvents = await eventModel.insertMany(eventsData);

    res.status(200).json({
      success: true,
      message: `${savedEvents.length} events created successfully`,
      events: savedEvents,
    });
  } catch (error) {
    console.log("Error during bulk event creation:", error);
    res.status(403).json({
      success: false,
      message: "Something went wrong, bulk creation unsuccessful",
      error: error.message,
    });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const eventData = JSON.stringify(req.body.after_event_report);
  console.log("Received request for eventId:", eventId);
  console.log(eventData);

  try {
    const updatedEvent = await eventModel.findByIdAndUpdate(
      eventId,
      { after_event_report: eventData },
      { new: true }
    );

    if (!updatedEvent) {
      console.log("Event not found for eventId:", eventId);
      return res.status(404).json({ error: "Event not found" });
    }

    console.log("Event updated successfully:", updatedEvent);
    res.json(updatedEvent);
  } catch (error) {
    console.error("Error updating event:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    console.log("Event ID:", eventId);
    const deletedEvent = await eventModel.findOneAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await eventModel.findById(id);

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

const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find({});
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching events",
      error: error.message,
    });
  }
};

const getAllApprovedEvents = async (req, res) => {
  try {
    const events = await eventModel.find({ approved: 1 });
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching events",
      error: error.message,
    });
  }
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  getAllApprovedEvents,
  createManyEvents,
};
