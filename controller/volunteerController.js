const coreModel = require("../model/coreModel");
const volunteerModel = require("../model/volunteerModel");

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
      success: true,
      message: "Successfully saved",
      savedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in saving",
    });
  }
};

const getVolunteer = async (req, res) => {
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
};

module.exports = { saveVolunteer, getVolunteer };
