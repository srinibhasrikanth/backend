const express = require("express");
const {
  registerStudent,
  getStudent,
} = require("../controller/registerController");

const router = express.Router();

router.post("/register-student", registerStudent);

router.get("/get-student/:id", getStudent);

module.exports = router;
