import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ username, children }) => {
  if (!username) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
