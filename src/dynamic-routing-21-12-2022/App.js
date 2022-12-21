import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import List from "./List";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:piyush" element={<Detail />} />
    </Routes>
  );
};

export default App;
