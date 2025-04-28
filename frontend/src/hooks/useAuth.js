import axios from 'axios';

export const useAuth = () => {
  const login = async (credentials) => {
    const { data } = await axios.post('/api/auth/login', credentials);
    return data;
  };

  const register = async (credentials) => {
    const { data } = await axios.post('/api/auth/register', credentials);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return { login, register, logout };
};
