// src/pages/auth/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken, getUserRole } from "../../lib/token";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const { token } = response.data;
      setToken(token);

      const role = getUserRole(); // decode token to get role

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "teacher") {
        navigate("/teacher/dashboard");
      } else if (role === "student") {
        navigate("/student/dashboard");
      } else {
        navigate("/unauthorized");
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Login failed");
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
