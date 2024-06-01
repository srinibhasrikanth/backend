const express = require("express");
const { getVolunteer, saveVolunteer } = require("../controller/volunteerController");

const router = express.Router();
router.get("/get-volunteer", getVolunteer);
router.post("/add-volunteer", saveVolunteer);
module.exports = router;
