import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import axios from "axios";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", password: "" });
  const [open, setOpen] = useState(false);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/api/admin/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const handleAddStudent = async () => {
    try {
      await axios.post("/api/admin/students", { 
        ...newStudent, 
        role: "student" // ensure role is student
      });
      setNewStudent({ name: "", email: "", password: "" });
      setOpen(false);
      fetchStudents();
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`/api/admin/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Students</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add New Student</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a Student</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              />
              <Input
                placeholder="Password"
                type="password"
                value={newStudent.password}
                onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
              />
            </div>
            <DialogFooter className="mt-4">
              <Button onClick={handleAddStudent}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{student.name}</CardTitle>
              <p className="text-muted-foreground text-sm">{student.email}</p>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="destructive" onClick={() => handleDeleteStudent(student.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageStudents;
