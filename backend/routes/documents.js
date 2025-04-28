import express from "express";
import { uploadDocument, getDocuments } from "../controllers/documentController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getDocuments);
router.post("/", protect, authorizeRoles("teacher"), uploadDocument);

export default router;
