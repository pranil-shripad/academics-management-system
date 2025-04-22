const express = require("express");
const router = express.Router();
const controller = require("../controllers/courseController");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.get("/", authenticateToken, controller.getCourses);
router.post("/", authenticateToken, authorizeRole("admin"), controller.createCourse);

module.exports = router;
