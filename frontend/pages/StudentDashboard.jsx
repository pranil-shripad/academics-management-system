import { useEffect, useState } from "react";
import API from "../api";

export default function StudentDashboard() {
  const [assignments, setAssignments] = useState([]);
  const [submission, setSubmission] = useState({ assignment_id: "", file_path: "" });

  useEffect(() => {
    API.get("/assignments").then((res) => setAssignments(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/submissions", submission);
    setSubmission({ assignment_id: "", file_path: "" });
    alert("Submitted!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2 flex-wrap">
        <select
          className="border px-3 py-1 rounded"
          value={submission.assignment_id}
          onChange={(e) => setSubmission({ ...submission, assignment_id: e.target.value })}
          required
        >
          <option value="">Select Assignment</option>
          {assignments.map((a) => (
            <option key={a.assignment_id} value={a.assignment_id}>
              {a.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="File Path / URL"
          className="border px-3 py-1 rounded"
          value={submission.file_path}
          onChange={(e) => setSubmission({ ...submission, file_path: e.target.value })}
          required
        />
        <button className="bg-purple-500 text-white px-4 py-1 rounded">Submit</button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Available Assignments</h2>
        <ul className="space-y-2">
          {assignments.map((a) => (
            <li key={a.assignment_id} className="p-3 border rounded bg-gray-100">
              {a.title} (Due: {a.due_date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
