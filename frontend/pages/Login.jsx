// src/pages/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/50 p-6">
      <Card className="w-full max-w-md p-8 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center mb-4 font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium rounded-md p-2 hover:bg-primary/90 transition"
            >
              Login
            </button>

            {/* Link to Register */}
            <div className="text-center text-sm mt-4">
              <span>Don't have an account? </span>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-primary hover:underline font-medium"
              >
                Register
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
