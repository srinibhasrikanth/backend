const express = require("express");
const {
  loginController,
  registerController,
} = require("../controller/authController.js");

const router = express.Router();

//login post method
router.post("/login", loginController);

//register post method
router.post("/register", registerController);

module.exports = router;
