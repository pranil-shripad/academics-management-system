// src/pages/ManageTeachers.jsx

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ManageTeachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Dummy fetch example — Replace with your API
    setTeachers([
      { id: 1, name: "Prof. Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Dr. Bob Williams", email: "bob@example.com" },
    ]);
  }, []);

  const handleAddTeacher = () => {
    // Add teacher logic
  };

  const handleEditTeacher = (id) => {
    // Edit teacher logic
  };

  const handleDeleteTeacher = (id) => {
    // Delete teacher logic
  };

  return (
    <div className="min-h-screen bg-muted/50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Teachers</h1>
          <Button onClick={handleAddTeacher}>Add New Teacher</Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="rounded-2xl">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>{teacher.name}</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleEditTeacher(teacher.id)}>
                    Edit
                  </Button>
                  <Button variant="destructive" onClick={() => handleDeleteTeacher(teacher.id)}>
                    Delete
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Email: {teacher.email}</p>
                <p className="text-muted-foreground text-sm">Teacher ID: {teacher.id}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageTeachers;
