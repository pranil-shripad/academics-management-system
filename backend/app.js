import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/courses.js";
import studentRoutes from "./routes/students.js";
import teacherRoutes from "./routes/teachers.js";
import assignmentRoutes from "./routes/assignments.js";
import documentRoutes from "./routes/documents.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/documents", documentRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
