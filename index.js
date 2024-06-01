const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db.js");
const { getAllEvents } = require("./controller/eventController.js");

//dotenv config
dotenv.config();

//rest app
const app = express();

//database config
connectDB();

//middlewares
app.use(cors());
// app.use(morgan());
app.use(express.json());

//routes
app.get("/api/v1/events", (req, res) => {
  res.send("Hello welcome to my world");
});

app.use("/api/v1/events/get-all-events", async (req, res) => {
  try {
    const events = await eventModel.find({});
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching events",
      error: error.message,
    });
  }
});

app.use("/api/v1/auth", require("./route/authRoute.js"));

//PORT number
const PORT = process.env.PORT || 8080;

//Listening the PORT
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

module.export = app;
