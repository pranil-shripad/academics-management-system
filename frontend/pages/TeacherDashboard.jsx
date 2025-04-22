import { useEffect, useState } from "react";
import API from "../api";

export default function TeacherDashboard() {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({ title: "", due_date: "", course_id: "" });

  useEffect(() => {
    API.get("/assignments").then((res) => setAssignments(res.data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await API.post("/assignments", form);
    const updated = await API.get("/assignments");
    setAssignments(updated.data);
    setForm({ title: "", due_date: "", course_id: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <form onSubmit={handleCreate} className="mb-6 flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Title"
          className="border px-3 py-1 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="date"
          className="border px-3 py-1 rounded"
          value={form.due_date}
          onChange={(e) => setForm({ ...form, due_date: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Course ID"
          className="border px-3 py-1 rounded"
          value={form.course_id}
          onChange={(e) => setForm({ ...form, course_id: e.target.value })}
          required
        />
        <button className="bg-green-500 text-white px-4 py-1 rounded">Create Assignment</button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Assignments</h2>
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
