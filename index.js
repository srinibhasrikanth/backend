const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db.js");
const { getAllEvents } = require("./controller/eventController.js");
const eventModel = require("./model/eventModel.js");
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
  res.json("Hello welcome to my world");
});

app.use("/api/v1/events/get-all-events", getAllEvents);

app.use("/api/v1/auth", require("./route/authRoute.js"));

//PORT number
const PORT = process.env.PORT || 8080;

//Listening the PORT
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

module.export = app;
