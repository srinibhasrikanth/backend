const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db.js");
const eventModel = require("./model/eventModel.js");
const nodemailer = require("nodemailer");

const path = require("path");

//dotenv config
dotenv.config();

//rest app
const app = express();

//database config
connectDB();

//middlewares
app.use(
  cors({
    // origin: ["https://frontend-nu-flame-39.vercel.app"],
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.post("/send-emails", async (req, res) => {
  try {
    const { subject, body, emailList } = req.body;

    if (!subject || !body || !emailList) {
      return res.status(400).send("Missing required fields");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "srinibha.srikanth@gmail.com",
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: "srinibha.srikanth@gmail.com",
      subject: subject,
      text: body,
    };

    for (const row of emailList) {
      await transporter.sendMail({ ...mailOptions, to: row.email });
    }

    res.status(200).send("Emails sent successfully.");
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).send("Error sending emails.");
  }
});

//routes
app.get("/", (req, res) => {
  res.send("Hello welcome to my world");
});

app.use("/api/v1/events", require("./route/eventRoute.js"));

app.use("/api/v1/auth", require("./route/authRoute.js"));

app.use("/api/v1/members", require("./route/memberRoute.js"));

app.use("/api/v1/core", require("./route/coreRoute.js"));
app.use("/api/v1/volunteer", require("./route/volunteerRoute.js"));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Endpoint to handle file upload
app.post("/api/upload-poster", upload.single("poster"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    res.status(200).send({ filePath: `/uploads/${req.file.filename}` });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file.");
  }
});

//PORT number
const PORT = process.env.PORT || 8080;

// //Listening the PORT
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

module.export = app;
