import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageCourses from "@/pages/admin/ManageCourses";
import ManageStudents from "@/pages/admin/ManageStudents";
import ManageTeachers from "@/pages/admin/ManageTeachers";
import TeacherDashboard from "@/pages/teacher/TeacherDashboard";
import UploadAssignment from "@/pages/teacher/UploadAssignment";
import UploadDocument from "@/pages/teacher/UploadDocument";
import StudentDashboard from "@/pages/student/StudentDashboard";
import SubmitAssignment from "@/pages/student/SubmitAssignment";
import EnrollCourses from "@/pages/student/EnrollCourses";
import ViewPerformance from "@/pages/student/ViewPerformance";
import NotFound from "@/pages/NotFound";

import { getUserRole } from "@/lib/token"; // ✅ fixed this

function App() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedRole = getUserRole();
    console.log('Fetched role from token:', fetchedRole); // ✅ fixed this
    setRole(fetchedRole);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Loading...
      </div>
    );
    //console.log('Role inside App.jsx:', role);
  }

  return (
    <>
      {role && <Navbar role={role} />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-courses" element={<ManageCourses />} />
          <Route path="/admin/manage-students" element={<ManageStudents />} />
          <Route path="/admin/manage-teachers" element={<ManageTeachers />} />
        </Route>

        {/* Teacher Routes */}
        <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/upload-assignment" element={<UploadAssignment />} />
          <Route path="/teacher/upload-document" element={<UploadDocument />} />
        </Route>

        {/* Student Routes */}
        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/submit-assignment" element={<SubmitAssignment />} />
          <Route path="/student/enroll-course" element={<EnrollCourses />} />
          <Route path="/student/performance" element={<ViewPerformance />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
