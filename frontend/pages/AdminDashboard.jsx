import { useEffect, useState } from "react";
import API from "../api";

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({ course_name: "", professor_id: "" });

  useEffect(() => {
    API.get("/courses").then((res) => setCourses(res.data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await API.post("/courses", form);
    const updated = await API.get("/courses");
    setCourses(updated.data);
    setForm({ course_name: "", professor_id: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleCreate} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Course Name"
          className="border px-3 py-1 rounded"
          value={form.course_name}
          onChange={(e) => setForm({ ...form, course_name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Professor ID"
          className="border px-3 py-1 rounded"
          value={form.professor_id}
          onChange={(e) => setForm({ ...form, professor_id: e.target.value })}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Create Course</button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Courses</h2>
        <ul className="space-y-2">
          {courses.map((c) => (
            <li key={c.course_id} className="p-3 border rounded bg-gray-100">
              {c.course_name} (Professor ID: {c.professor_id})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
