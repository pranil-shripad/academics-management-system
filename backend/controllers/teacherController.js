import { db } from "../db/index.js";

export const getAllTeachers = async (req, res) => {
  const { rows } = await db.query(
    "SELECT id, name, email FROM users WHERE role = 'teacher'"
  );
  res.json(rows);
};
