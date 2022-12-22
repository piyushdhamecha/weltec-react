import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  console.log(username);
  const handleLoginSubmit = (usernameArg, passwordArg) => {
    setUsername(usernameArg);

    if (usernameArg === "piyush" && passwordArg === "piyush123") {
      console.log("Is admin");
      navigate("/admin-dashboard");
    } else {
      console.log("Normal user");
      navigate("/dashboard");
    }
  };

  return (
    <React.Fragment>
      {!username ? (
        <Login onSubmit={handleLoginSubmit} />
      ) : (
        <button>Logout</button>
      )}

      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute username={username}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute username={username}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
