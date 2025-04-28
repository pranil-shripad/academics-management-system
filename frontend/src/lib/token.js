// src/lib/token.js

// Save token to localStorage
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Decode token and get role
export const getUserRole = () => {
  const token = getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1])); // decoding JWT
  return payload.role;
};

// Clear token
export const clearToken = () => {
  localStorage.removeItem('token');
};

// Alias for getUserRole to match import names
export const getTokenRole = getUserRole;

// Logout function
export const logout = () => {
  clearToken();
};
