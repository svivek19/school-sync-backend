const studentData = require("../model/student.model");

// get all student data
const getStudentAll = async (req, res) => {
  try {
    const students = await studentData.find();
    res.status(201).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a new student data
const createStudent = async (req, res) => {
  try {
    const student = new studentData(req.body);
    const response = await student.save();
    res.status(201).json({ message: "success", data: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStudent, getStudentAll };
