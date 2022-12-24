import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, path = "/", children }) => {
  debugger;
  if (!isAllowed) {
    return <Navigate to={path} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
