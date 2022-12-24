import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Card from "./Card";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "piyush",
    permissions: ["analyze"],
    roles: ["admin"],
  });

  useEffect(() => {
    if (user.name) {
      if (user.name === "piyush") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    }
  }, []);

  const handleLoginSubmit = (usernameArg, passwordArg) => {
    if (usernameArg === "piyush" && passwordArg === "piyush123") {
      setUser({
        name: usernameArg,
        permissions: ["analyze"],
        roles: ["admin"],
      });

      navigate("/admin-dashboard");
    } else {
      setUser({
        name: usernameArg,
        permissions: [],
        roles: ["teacher"],
      });

      navigate("/dashboard");
    }
  };

  const handleLogoutClick = () => {
    setUser({});
    navigate("/");
  };
  console.log(user);
  return (
    <React.Fragment>
      {!user.name ? (
        <Login onSubmit={handleLoginSubmit} />
      ) : (
        <React.Fragment>
          <button onClick={handleLogoutClick}>Logout</button>
          <br />
          <Link to="/analytics">Analytics</Link>
          <br />
          <Link to="/admin">Admin</Link>
          <br />
          <Link to="/aaaa">aaa</Link>
        </React.Fragment>
      )}
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route element={<ProtectedRoute isAllowed={!!user.name} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              isAllowed={!!user.name && user.permissions.includes("analyze")}
              path="/dashboard"
            >
              <div>Analytics</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={!!user.name && user.roles.includes("admin")}
              path="/dashboard"
            >
              <div>Admin</div>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
