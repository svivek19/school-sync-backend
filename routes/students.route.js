const express = require("express");
const {
  getStudentAll,
  createStudent,
  deleteOneStudent,
  getStudentbyId,
  updateStudent,
} = require("../controller/student.controller");

const router = express.Router();

router.get("/get", getStudentAll);
router.get("/get-one/:id", getStudentbyId);
router.post("/add-student", createStudent);
router.delete("/delete-student/:id", deleteOneStudent);
router.patch("/update/:id", updateStudent);

module.exports = router;
