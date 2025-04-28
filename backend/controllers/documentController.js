import { db } from "../db/index.js";

export const uploadDocument = async (req, res) => {
  const { title, link, course_id } = req.body;
  await db.query(
    "INSERT INTO documents (title, link, course_id) VALUES ($1, $2, $3)",
    [title, link, course_id]
  );
  res.status(201).json({ message: "Document uploaded" });
};

export const getDocuments = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM documents");
  res.json(rows);
};
