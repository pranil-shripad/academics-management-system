const pool = require("../db");

exports.getCourses = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Courses");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCourse = async (req, res) => {
  const { course_name, professor_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO Courses (course_name, professor_id) VALUES ($1, $2) RETURNING *",
      [course_name, professor_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
