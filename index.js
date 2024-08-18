const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const db = process.env.MONGODB_URI;

const port = 5000;

mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});
