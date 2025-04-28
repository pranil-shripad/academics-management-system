import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import axios from "axios";

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/teacher/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const handleUpload = async () => {
    if (!file || !selectedCourse) {
      alert("Please select a course and a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("courseId", selectedCourse);

    try {
      await axios.post("/api/teacher/documents", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFile(null);
      setSelectedCourse("");
      alert("Document uploaded successfully!");
    } catch (error) {
      console.error("Failed to upload document:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Upload Course Documents</h1>

      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
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
            <Label>Upload File</Label>
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <Button className="w-full" onClick={handleUpload}>
            Upload
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadDocument;
