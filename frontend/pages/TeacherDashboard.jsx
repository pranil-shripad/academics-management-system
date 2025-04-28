import React from "react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/teacher/upload-assignment" className="bg-blue-500 text-white p-6 rounded-lg text-center hover:bg-blue-600">
          Upload Assignment
        </Link>
        <Link to="/teacher/upload-performance" className="bg-purple-500 text-white p-6 rounded-lg text-center hover:bg-purple-600">
          Upload Performance
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;
