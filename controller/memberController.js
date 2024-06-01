const coreModel = require("../model/coreModel");
const mongoose = require("mongoose");
const saveCore = async (req, res) => {
  try {
    const coreDataArray = req.body;

    // Check if coreDataArray is an array
    if (!Array.isArray(coreDataArray)) {
      return res.status(400).json({
        success: false,
        message: "Invalid input: Expected an array of objects",
      });
    }

    // Use insertMany to save an array of documents
    const savedData = await coreModel.insertMany(coreDataArray);
    res.status(200).json({
      success: "true",
      message: "Sucessfully saved",
      savedData,
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: "Error in saving",
    });
  }
};

const saveMember = async (req, res) => {};

const saveVolunteer = async (req, res) => {};

module.exports = { saveCore, saveMember, saveVolunteer };
