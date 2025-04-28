import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import axios from "axios";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [open, setOpen] = useState(false);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/api/admin/courses"); // adjust endpoint if needed
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  const handleAddCourse = async () => {
    try {
      await axios.post("/api/admin/courses", { name: newCourse });
      setNewCourse("");
      setOpen(false);
      fetchCourses();
    } catch (error) {
      console.error("Failed to add course:", error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`/api/admin/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Courses</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add New Course</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a Course</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Course Name"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
            />
            <DialogFooter className="mt-4">
              <Button onClick={handleAddCourse}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="destructive" onClick={() => handleDeleteCourse(course.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
