import axios from 'axios';

export const useAdmin = () => {
  const getCourses = async () => {
    const { data } = await axios.get('/api/courses');
    return data;
  };

  const addCourse = async (course) => {
    const { data } = await axios.post('/api/courses', course);
    return data;
  };

  const assignTeacher = async (courseId, teacherId) => {
    const { data } = await axios.post(`/api/courses/${courseId}/assign-teacher`, { teacherId });
    return data;
  };

  const getStudents = async () => {
    const { data } = await axios.get('/api/students');
    return data;
  };

  const getTeachers = async () => {
    const { data } = await axios.get('/api/teachers');
    return data;
  };

  return { getCourses, addCourse, assignTeacher, getStudents, getTeachers };
};
