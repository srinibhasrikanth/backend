const express = require("express");
const {
  createEvent,
  updateEvent,
  getAllEvents,
  getEvent,
  deleteEvent,
  getAllApprovedEvents,
  createManyEvents,
} = require("../controller/eventController");

const router = express.Router();

router.post("/create-event", createEvent);

router.post("/create-many-events", createManyEvents);

router.put("/update-event/:id", updateEvent);

router.get("/get-all-events", getAllEvents);

router.get("/get-event/:id", getEvent);

router.delete("/delete-event/:id", deleteEvent);

router.get("/get-approved-events", getAllApprovedEvents);

module.exports = router;
