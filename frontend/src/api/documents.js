// src/api/documents.js

import API from "@/lib/axios";

export const uploadDocument = async (document) => {
  const { data } = await API.post("/documents", document);
  return data;
};

export const getDocuments = async () => {
  const { data } = await API.get("/documents");
  return data;
};
