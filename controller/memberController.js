const coreModel = require("../model/coreModel");
const mongoose=require('mongoose')
const saveCore = async (req, res) => {
  try {
    const coreData = req.body;
    const newData = new coreModel(coreData);
    const saveData = await newData.insertMany();
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
