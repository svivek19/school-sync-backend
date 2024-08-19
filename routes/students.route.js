const express = require("express");
const {
  getStudentAll,
  createStudent,
  deleteOneStudent,
  getStudentbyId,
} = require("../controller/student.controller");

const router = express.Router();

router.get("/get", getStudentAll);
router.post("/add-student", createStudent);
router.post("/get-one", getStudentbyId);
router.delete("/delete-student", deleteOneStudent);

module.exports = router;
