const express = require("express");
const router = express.Router();
const controller = require("../controllers/assignmentController");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.get("/", authenticateToken, controller.getAssignments);
router.post("/", authenticateToken, authorizeRole("teacher"), controller.createAssignment);

module.exports = router;
