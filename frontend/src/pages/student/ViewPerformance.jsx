// src/pages/student/ViewPerformance.jsx

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const ViewPerformance = () => {
  const [performanceData, setPerformanceData] = useState([]);

  const fetchPerformance = async () => {
    try {
      const response = await axios.get("/api/student/performance");
      setPerformanceData(response.data);
    } catch (error) {
      console.error("Failed to fetch performance data:", error);
    }
  };

  useEffect(() => {
    fetchPerformance();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Performance</h1>

      {performanceData.length === 0 ? (
        <p className="text-muted-foreground">No performance data available yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {performanceData.map((performance) => (
            <Card key={performance.id}>
              <CardHeader>
                <CardTitle>{performance.courseName}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <strong>Assignment Marks:</strong> {performance.assignmentMarks}
                </div>
                <div className="text-sm">
                  <strong>Exam Marks:</strong> {performance.examMarks}
                </div>
                <div className="text-sm">
                  <strong>Total:</strong> {performance.totalMarks}
                </div>
                <div className="text-sm">
                  <strong>Grade:</strong> {performance.grade}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewPerformance;
