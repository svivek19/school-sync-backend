const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const studentRoutes = require("./routes/students.route");

dotenv.config();
const app = express();

const db = process.env.MONGODB_URI;

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected");

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

// routes
app.use("/student", studentRoutes);
