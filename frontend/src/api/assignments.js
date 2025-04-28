// src/api/assignments.js

import API from "@/lib/axios";

export const getAssignments = async () => {
  const { data } = await API.get("/assignments");
  return data;
};

export const uploadAssignment = async (assignment) => {
  const { data } = await API.post("/assignments", assignment);
  return data;
};

export const submitAssignment = async (submission) => {
  const { data } = await API.post("/submissions", submission);
  return data;
};
