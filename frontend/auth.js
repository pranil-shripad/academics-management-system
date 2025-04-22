export const getUser = () => JSON.parse(localStorage.getItem("user"));
export const getToken = () => localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
