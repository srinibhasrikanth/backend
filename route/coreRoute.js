const express = require("express");
const { getCore, saveCore } = require("../controller/coreController");

const router = express.Router();
router.get("/get-core", getCore);
router.post("/add-core", saveCore);
module.exports = router;
