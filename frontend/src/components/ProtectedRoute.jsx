import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../lib/token";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const userRole = payload.role;

    if (allowedRoles.includes(userRole)) {
      return <Outlet />;
    } else {
      return <Navigate to="/unauthorized" replace />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
