// src/api/courses.js

import API from "@/lib/axios";

export const getCourses = async () => {
  const { data } = await API.get("/courses");
  return data;
};

export const createCourse = async (course) => {
  const { data } = await API.post("/courses", course);
  return data;
};

export const optCourse = async (courseId) => {
  const { data } = await API.post(`/courses/opt`, { courseId });
  return data;
};
