import { db } from "../db/index.js";

export const getMe = async (req, res, next) => {
  try {
    const user = await db.query("SELECT id, name, email, role FROM users WHERE id = $1", [req.user.id]);
    res.status(200).json(user.rows[0]);
  } catch (err) {
    next(err);
  }
};
