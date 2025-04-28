// src/pages/ManageStudents.jsx

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ManageStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Dummy fetch example — Replace with your API
    setStudents([
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
    ]);
  }, []);

  const handleAddStudent = () => {
    // Add student logic
  };

  const handleEditStudent = (id) => {
    // Edit student logic
  };

  const handleDeleteStudent = (id) => {
    // Delete student logic
  };

  return (
    <div className="min-h-screen bg-muted/50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Students</h1>
          <Button onClick={handleAddStudent}>Add New Student</Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {students.map((student) => (
            <Card key={student.id} className="rounded-2xl">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>{student.name}</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleEditStudent(student.id)}>
                    Edit
                  </Button>
                  <Button variant="destructive" onClick={() => handleDeleteStudent(student.id)}>
                    Delete
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Email: {student.email}</p>
                <p className="text-muted-foreground text-sm">Student ID: {student.id}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageStudents;
