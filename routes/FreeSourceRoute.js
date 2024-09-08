const express = require("express");
const {
  getAllFreeSource,
  createFreeSource,
  deleteFreeSource,
} = require("../controller/FreeSource.controller");

const router = express.Router();

router.get("/get-free-source", getAllFreeSource);
router.post("/create-free-source", createFreeSource);
router.delete("/delete-free-source/", deleteFreeSource);

module.exports = router;
