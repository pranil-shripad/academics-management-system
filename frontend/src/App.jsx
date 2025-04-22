import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashboard";
import TeacherDashboard from "../pages/TeacherDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboards */}
      <Route
        path="/admin"
        element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>}
      />
      <Route
        path="/teacher"
        element={<ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>}
      />
      <Route
        path="/student"
        element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>}
      />
    </Routes>
  );
}
