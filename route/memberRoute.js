const express = require("express");
const { saveMember, getMember } = require("../controller/memberController");

const router = express.Router();
router.get("/get-membership", getMember);
router.post("/add-membership", saveMember);
module.exports = router;
