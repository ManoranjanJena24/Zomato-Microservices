
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppData } from "../context/AppContext";

const ProtectedRoute = () => {
  const { isAuth, user, loading } = useAppData();
  const location = useLocation();

  if (loading) return null;

  // If not authenticated, redirect to login (or wherever you want)
  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  // If user has no role and isn't on select-role page
  if (user?.role === null && location.pathname !== "/select-role") {
    return <Navigate to={"/select-role"} replace />;
  }

// // //  If user has role but is trying to access select-role page
  // if (user?.role !== null && location.pathname === "/select-role") {
  //   return <Navigate to={"/"} replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;


