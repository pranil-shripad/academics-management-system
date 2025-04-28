// src/pages/Register.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        navigate("/login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/50 p-6">
      <Card className="w-full max-w-md p-8 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center mb-4 font-bold">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-input rounded-md p-2 focus:ring-2 focus:ring-primary"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              {/* Admin option REMOVED */}
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium rounded-md p-2 hover:bg-primary/90 transition"
            >
              Register
            </button>

            {/* Link to Login */}
            <div className="text-center text-sm mt-4">
              <span>Already have an account? </span>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-primary hover:underline font-medium"
              >
                Login
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
