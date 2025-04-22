const pool = require("../db");

exports.submitAssignment = async (req, res) => {
  const { assignment_id, file_path } = req.body;
  const student_id = req.user.user_id;

  try {
    const result = await pool.query(
      "INSERT INTO Submissions (assignment_id, student_id, file_path) VALUES ($1, $2, $3) RETURNING *",
      [assignment_id, student_id, file_path]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
