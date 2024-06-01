const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db.js");
const eventModel = require("./model/eventModel.js");

//dotenv config
dotenv.config();

//rest app
const app = express();

//database config
connectDB();

//middlewares
app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello welcome to my world");
});

app.use("/api/v1/events", require("./route/eventRoute.js"));

app.use("/api/v1/auth", require("./route/authRoute.js"));

//PORT number
const PORT = process.env.PORT || 8080;

// //Listening the PORT
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

module.export = app;