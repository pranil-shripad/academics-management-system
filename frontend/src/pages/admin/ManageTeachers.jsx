import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import axios from "axios";

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ name: "", email: "", password: "" });
  const [open, setOpen] = useState(false);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("/api/admin/teachers");
      setTeachers(response.data);
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
    }
  };

  const handleAddTeacher = async () => {
    try {
      await axios.post("/api/admin/teachers", { 
        ...newTeacher, 
        role: "teacher" // ensure role is teacher
      });
      setNewTeacher({ name: "", email: "", password: "" });
      setOpen(false);
      fetchTeachers();
    } catch (error) {
      console.error("Failed to add teacher:", error);
    }
  };

  const handleDeleteTeacher = async (id) => {
    try {
      await axios.delete(`/api/admin/teachers/${id}`);
      fetchTeachers();
    } catch (error) {
      console.error("Failed to delete teacher:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Teachers</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add New Teacher</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a Teacher</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={newTeacher.name}
                onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={newTeacher.email}
                onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
              />
              <Input
                placeholder="Password"
                type="password"
                value={newTeacher.password}
                onChange={(e) => setNewTeacher({ ...newTeacher, password: e.target.value })}
              />
            </div>
            <DialogFooter className="mt-4">
              <Button onClick={handleAddTeacher}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{teacher.name}</CardTitle>
              <p className="text-muted-foreground text-sm">{teacher.email}</p>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="destructive" onClick={() => handleDeleteTeacher(teacher.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageTeachers;
