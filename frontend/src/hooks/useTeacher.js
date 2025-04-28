import axios from 'axios';

export const useTeacher = () => {
  const uploadDocument = async (courseId, fileData) => {
    const { data } = await axios.post(`/api/teacher/${courseId}/upload-document`, fileData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  };

  const uploadAssignment = async (courseId, assignmentData) => {
    const { data } = await axios.post(`/api/teacher/${courseId}/upload-assignment`, assignmentData);
    return data;
  };

  return { uploadDocument, uploadAssignment };
};
