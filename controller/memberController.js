const coreModel = require("../model/coreModel");
const mongoose = require("mongoose");
const membershipModel = require("../model/membershipModel");
const volunteerModel = require("../model/volunteerModel");
const saveCore = async (req, res) => {
  try {
    const coreDataArray = req.body;

    if (!Array.isArray(coreDataArray)) {
      return res.status(400).json({
        success: false,
        message: "Invalid input: Expected an array of objects",
      });
    }

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

const getCore = async (req, res) => {
  try {
    const coreMembers = await coreModel.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved core members",
      coreMembers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in retrieving core members",
    });
  }
};
const getMember = async (req, res) => {
  try {
    const coreMembers = await membershipModel.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved core members",
      coreMembers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in retrieving core members",
    });
  }
};
const getVolunteer = async (req, res) => {};
try {
  const coreMembers = await volunteerModel.find({});
  res.status(200).json({
    success: true,
    message: "Successfully retrieved core members",
    coreMembers,
  });
} catch (error) {
  res.status(500).json({
    success: false,
    message: "Error in retrieving core members",
  });
}
const saveMember = async (req, res) => {
  try {
    const coreDataArray = req.body;

    if (!Array.isArray(coreDataArray)) {
      return res.status(400).json({
        success: false,
        message: "Invalid input: Expected an array of objects",
      });
    }

    const savedData = await membershipModel.insertMany(coreDataArray);
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

const saveVolunteer = async (req, res) => {
  try {
    const coreDataArray = req.body;

    if (!Array.isArray(coreDataArray)) {
      return res.status(400).json({
        success: false,
        message: "Invalid input: Expected an array of objects",
      });
    }

    const savedData = await volunteerModel.insertMany(coreDataArray);
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

module.exports = {
  saveCore,
  saveMember,
  saveVolunteer,
  getCore,
  getMember,
  getVolunteer,
};
