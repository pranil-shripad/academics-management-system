const express = require("express");
const router = express.Router();
const controller = require("../controllers/performanceController");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.post("/", authenticateToken, authorizeRole("teacher"), controller.gradeSubmission);

module.exports = router;
