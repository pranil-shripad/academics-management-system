import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/student/assignments" className="bg-indigo-500 text-white p-6 rounded-lg text-center hover:bg-indigo-600">
          View Assignments
        </Link>
        <Link to="/student/submissions" className="bg-green-500 text-white p-6 rounded-lg text-center hover:bg-green-600">
          View Submissions
        </Link>
        <Link to="/student/performance" className="bg-pink-500 text-white p-6 rounded-lg text-center hover:bg-pink-600">
          View Performance
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;
