import express from "express";
import { getCourses, createCourse } from "../controllers/courseController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", protect, authorizeRoles("admin"), createCourse);

export default router;
