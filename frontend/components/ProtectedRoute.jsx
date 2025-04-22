import { Navigate } from "react-router-dom";
import { getUser } from "../auth";

export default function ProtectedRoute({ children, role }) {
  const user = getUser();
  if (!user || user.role !== role) return <Navigate to="/login" />;
  return children;
}
