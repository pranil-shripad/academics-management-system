import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { clearToken, getUserRole } from "../lib/token";

function Navbar() {
  const navigate = useNavigate();
  const role = getUserRole();

  const handleLogout = () => {
    clearToken();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4 mb-4 rounded-xl">
      <Link to="/" className="text-2xl font-bold text-primary">
        Academic Manager
      </Link>

      <div className="flex items-center gap-4">
        {!role && (
          <>
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </>
        )}

        {role === "admin" && (
          <>
            <Button variant="ghost" asChild>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/admin/manage-courses">Courses</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/admin/manage-students">Students</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/admin/manage-teachers">Teachers</Link>
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}

        {role === "teacher" && (
          <>
            <Button variant="ghost" asChild>
              <Link to="/teacher/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/teacher/upload-assignment">Assignments</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/teacher/upload-document">Documents</Link>
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}

        {role === "student" && (
          <>
            <Button variant="ghost" asChild>
              <Link to="/student/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/student/enroll-course">Enroll</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/student/submit-assignment">Submit Work</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/student/performance">Performance</Link>
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
