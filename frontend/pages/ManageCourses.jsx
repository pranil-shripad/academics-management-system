// src/pages/ManageCourses.jsx

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ManageCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Dummy fetch example — Replace with your API
    setCourses([
      { id: 1, title: "Data Structures", description: "Learn about stacks, queues, and trees." },
      { id: 2, title: "Database Systems", description: "Explore relational databases and SQL." },
    ]);
  }, []);

  const handleAddCourse = () => {
    // Add course logic
  };

  const handleEditCourse = (id) => {
    // Edit course logic
  };

  const handleDeleteCourse = (id) => {
    // Delete course logic
  };

  return (
    <div className="min-h-screen bg-muted/50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Courses</h1>
          <Button onClick={handleAddCourse}>Add New Course</Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="rounded-2xl">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>{course.title}</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleEditCourse(course.id)}>
                    Edit
                  </Button>
                  <Button variant="destructive" onClick={() => handleDeleteCourse(course.id)}>
                    Delete
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.description}</p>
                <p className="text-muted-foreground text-sm">Course ID: {course.id}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageCourses;
