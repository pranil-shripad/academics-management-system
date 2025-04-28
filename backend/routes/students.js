import express from "express";
import { getAllStudents } from "../controllers/studentController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, authorizeRoles("admin"), getAllStudents);

export default router;
