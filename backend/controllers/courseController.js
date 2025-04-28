import { db } from "../db/index.js";

export const getCourses = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM courses");
  res.json(rows);
};

export const createCourse = async (req, res) => {
  const { title, description } = req.body;
  await db.query(
    "INSERT INTO courses (title, description) VALUES ($1, $2)",
    [title, description]
  );
  res.status(201).json({ message: "Course created" });
};
