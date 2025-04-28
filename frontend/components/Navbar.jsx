import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        {role === "admin" && (
          <>
            <Link to="/admin" className="hover:underline">Dashboard</Link>
            <Link to="/admin/manage-courses" className="hover:underline">Courses</Link>
            <Link to="/admin/manage-students" className="hover:underline">Students</Link>
            <Link to="/admin/manage-teachers" className="hover:underline">Teachers</Link>
          </>
        )}

        {role === "teacher" && (
          <>
            <Link to="/teacher" className="hover:underline">Dashboard</Link>
            <Link to="/teacher/upload-document" className="hover:underline">Upload Document</Link>
            <Link to="/teacher/upload-performance" className="hover:underline">Upload Performance</Link>
          </>
        )}

        {role === "student" && (
          <>
            <Link to="/student" className="hover:underline">Dashboard</Link>
            <Link to="/student/upload-assignment" className="hover:underline">Upload Assignment</Link>
          </>
        )}
      </div>

      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
