import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
