const express = require("express");
const {
  saveCore,
  saveVolunteer,
  saveMember,
} = require("../controller/memberController");

const router = express.Router();

router.post("/add-core", saveCore);

router.post("/add-volunteer", saveVolunteer);

router.post("/add-membership", saveMember);
module.exports = router;
