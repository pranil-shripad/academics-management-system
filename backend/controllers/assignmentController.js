import { db } from "../db/index.js";

export const getAssignments = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM assignments");
  res.json(rows);
};

export const createAssignment = async (req, res) => {
  const { title, description, course_id } = req.body;
  await db.query(
    "INSERT INTO assignments (title, description, course_id) VALUES ($1, $2, $3)",
    [title, description, course_id]
  );
  res.status(201).json({ message: "Assignment created" });
};
