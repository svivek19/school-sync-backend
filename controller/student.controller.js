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

// get one student data
const getStudentbyId = async (req, res) => {
  try {
    const { id } = req.param;
    const student = await studentData.findById({ _id: id });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a new student data
const createStudent = async (req, res) => {
  try {
    const student = await studentData.create(req.body);
    res.status(201).json({ message: "success", data: student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStudent, getStudentAll, getStudentbyId };
