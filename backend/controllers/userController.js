const pool = require("../db");

exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT user_id, name, email, role FROM Users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
