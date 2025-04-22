const express = require("express");
const router = express.Router();
const controller = require("../controllers/submissionController");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.post("/", authenticateToken, authorizeRole("student"), controller.submitAssignment);

module.exports = router;
