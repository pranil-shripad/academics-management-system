// src/pages/auth/Unauthorized.jsx

import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../lib/token";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    const role = getUserRole();

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "teacher") {
      navigate("/teacher/dashboard");
    } else if (role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-6">
        <h2 className="text-3xl font-bold text-red-500">Unauthorized</h2>
        <p className="text-gray-600">You don't have permission to access this page.</p>
        <button
          onClick={handleGoHome}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
