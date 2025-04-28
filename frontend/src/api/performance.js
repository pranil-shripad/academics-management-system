// src/api/performance.js

import API from "@/lib/axios";

export const getPerformance = async () => {
  const { data } = await API.get("/performance");
  return data;
};
