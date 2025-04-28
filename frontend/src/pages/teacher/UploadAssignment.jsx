import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const UploadAssignment = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/teacher/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const handleUpload = async () => {
    if (!selectedCourse || !title || !description || !deadline) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("/api/teacher/assignments", {
        courseId: selectedCourse,
        title,
        description,
        deadline,
      });

      setSelectedCourse("");
      setTitle("");
      setDescription("");
      setDeadline("");
      alert("Assignment uploaded successfully!");
    } catch (error) {
      console.error("Failed to upload assignment:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Upload Assignment</h1>

      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Assignment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Select Course</Label>
            <Select onValueChange={(value) => setSelectedCourse(value)} value={selectedCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id.toString()}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Assignment Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Assignment Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Deadline</Label>
            <Input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <Button className="w-full" onClick={handleUpload}>
            Upload Assignment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadAssignment;
