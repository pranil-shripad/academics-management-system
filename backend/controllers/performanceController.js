const pool = require("../db");

exports.gradeSubmission = async (req, res) => {
  const { student_id, assignment_id, grade, feedback } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO Performance (student_id, assignment_id, grade, feedback) VALUES ($1, $2, $3, $4) RETURNING *",
      [student_id, assignment_id, grade, feedback]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
