// src/pages/student/OptCourse.jsx

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

const EnrollCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/student/available-courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const handleCheckboxChange = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const handleSubmit = async () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course.");
      return;
    }

    try {
      await axios.post("/api/student/enroll-courses", {
        courseIds: selectedCourses,
      });
      alert("Courses opted successfully!");
      setSelectedCourses([]);
    } catch (error) {
      console.error("Failed to opt courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Opt for Courses</h1>

      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Select Your Courses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center space-x-2">
              <Checkbox
                id={`course-${course.id}`}
                checked={selectedCourses.includes(course.id)}
                onCheckedChange={() => handleCheckboxChange(course.id)}
              />
              <label htmlFor={`course-${course.id}`} className="text-sm font-medium leading-none">
                {course.name}
              </label>
            </div>
          ))}

          <Button className="w-full mt-4" onClick={handleSubmit}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnrollCourses;
