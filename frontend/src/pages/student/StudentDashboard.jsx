// src/pages/student/StudentDashboard.jsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/opt-course">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Opt for Courses</CardTitle>
            </CardHeader>
            <CardContent>
              Browse and enroll in available courses.
            </CardContent>
          </Card>
        </Link>

        <Link to="/submit-assignment">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Submit Assignment</CardTitle>
            </CardHeader>
            <CardContent>
              Upload your completed assignments.
            </CardContent>
          </Card>
        </Link>

        <Link to="/view-performance">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>View Performance</CardTitle>
            </CardHeader>
            <CardContent>
              Track your scores and academic performance.
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;
