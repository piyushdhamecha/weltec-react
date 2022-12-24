import { Outlet, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import List from "./List";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route
        path="admin"
        element={
          <div>
            Test
            <br />
            <Outlet />
          </div>
        }
      >
        <Route path=":piyush" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
