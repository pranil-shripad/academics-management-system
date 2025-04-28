// src/pages/teacher/TeacherDashboard.jsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Teacher Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/upload-assignment">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Upload Assignment</CardTitle>
            </CardHeader>
            <CardContent>
              Upload new assignments for your assigned courses.
            </CardContent>
          </Card>
        </Link>

        <Link to="/upload-document">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Upload Course Notes</CardTitle>
            </CardHeader>
            <CardContent>
              Share additional materials or notes with your students.
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;
