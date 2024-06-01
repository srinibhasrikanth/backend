const membershipModel = require("../model/membershipModel");

const getMember = async (req, res) => {
  try {
    const members = await membershipModel.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved members",
      members,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in retrieving members",
    });
  }
};

const saveMember = async (req, res) => {
  try {
    const memberDataArray = req.body;

    if (!Array.isArray(memberDataArray)) {
      return res.status(400).json({
        success: false,
        message: "Invalid input: Expected an array of objects",
      });
    }

    const savedData = await membershipModel.insertMany(memberDataArray);
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

module.exports = {
  saveMember,
  getMember,
};
