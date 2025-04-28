// src/pages/student/SubmitAssignment.jsx

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import axios from "axios";

const SubmitAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [file, setFile] = useState(null);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get("/api/student/assignments");
      setAssignments(response.data);
    } catch (error) {
      console.error("Failed to fetch assignments:", error);
    }
  };

  const handleUpload = async () => {
    if (!selectedAssignment || !file) {
      alert("Please select an assignment and file.");
      return;
    }

    const formData = new FormData();
    formData.append("assignmentId", selectedAssignment);
    formData.append("file", file);

    try {
      await axios.post("/api/student/submissions", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSelectedAssignment("");
      setFile(null);
      alert("Assignment submitted successfully!");
    } catch (error) {
      console.error("Failed to upload submission:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Submit Assignment</h1>

      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Submit Your Work</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Select Assignment</Label>
            <Select onValueChange={(value) => setSelectedAssignment(value)} value={selectedAssignment}>
              <SelectTrigger>
                <SelectValue placeholder="Select assignment" />
              </SelectTrigger>
              <SelectContent>
                {assignments.map((assignment) => (
                  <SelectItem key={assignment.id} value={assignment.id.toString()}>
                    {assignment.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Upload File</Label>
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <Button className="w-full" onClick={handleUpload}>
            Submit Assignment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitAssignment;
