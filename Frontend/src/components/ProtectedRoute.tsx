import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
