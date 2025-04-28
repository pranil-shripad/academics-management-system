import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Manage Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={() => navigate("/admin/manage-courses")}>
              Go
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Manage Students</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={() => navigate("/admin/manage-students")}>
              Go
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardHeader>
            <CardTitle>Manage Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={() => navigate("/admin/manage-teachers")}>
              Go
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
