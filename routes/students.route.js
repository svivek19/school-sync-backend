const express = require("express");
const {
  getStudentAll,
  createStudent,
} = require("../controller/student.controller");

const router = express.Router();

router.get("/get", getStudentAll);
router.post("/add-student", createStudent);

module.exports = router;
