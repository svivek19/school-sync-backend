const { v4: uuidv4 } = require("uuid");
const FreeSource = require("../model/FreeSource.model");

// Create a free source
const createFreeSource = async (req, res) => {
  // generate custom id
  const id = `2024VB${uuidv4()}`;

  // add custom id to request body
  const reqBody = { ...req.body, id };
  try {
    const response = await FreeSource.create(reqBody);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// getAll FreeSource
const getAllFreeSource = async (req, res) => {
  try {
    const response = await FreeSource.find();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete a FreeSource
const deleteFreeSource = async (req, res) => {
  const id = req.body;
  try {
    const response = await FreeSource.deleteOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createFreeSource, getAllFreeSource, deleteFreeSource };
