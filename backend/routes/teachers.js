import express from "express";
import { getAllTeachers } from "../controllers/teacherController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, authorizeRoles("admin"), getAllTeachers);

export default router;
