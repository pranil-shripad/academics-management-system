const pool = require("../db");

exports.createAssignment = async (req, res) => {
  const { title, due_date, course_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO Assignments (title, due_date, course_id) VALUES ($1, $2, $3) RETURNING *",
      [title, due_date, course_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Assignments");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
