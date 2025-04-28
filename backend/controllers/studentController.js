import { db } from "../db/index.js";

export const getAllStudents = async (req, res) => {
  const { rows } = await db.query(
    "SELECT id, name, email FROM users WHERE role = 'student'"
  );
  res.json(rows);
};
