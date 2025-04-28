import axios from 'axios';

export const useStudent = () => {
  const optCourse = async (courseId) => {
    const { data } = await axios.post(`/api/student/opt-course`, { courseId });
    return data;
  };

  const uploadSubmission = async (assignmentId, submissionData) => {
    const { data } = await axios.post(`/api/student/submit-assignment/${assignmentId}`, submissionData);
    return data;
  };

  const getPerformance = async () => {
    const { data } = await axios.get(`/api/student/performance`);
    return data;
  };

  return { optCourse, uploadSubmission, getPerformance };
};
