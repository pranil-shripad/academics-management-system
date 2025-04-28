import express from "express";
import { getAssignments, createAssignment } from "../controllers/assignmentController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAssignments);
router.post("/", protect, authorizeRoles("teacher"), createAssignment);

export default router;
