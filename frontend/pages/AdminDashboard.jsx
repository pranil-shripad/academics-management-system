import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/manage-courses" className="bg-blue-500 text-white p-6 rounded-lg text-center hover:bg-blue-600">
          Manage Courses
        </Link>
        <Link to="/admin/manage-students" className="bg-green-500 text-white p-6 rounded-lg text-center hover:bg-green-600">
          Manage Students
        </Link>
        <Link to="/admin/manage-teachers" className="bg-purple-500 text-white p-6 rounded-lg text-center hover:bg-purple-600">
          Manage Teachers
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
