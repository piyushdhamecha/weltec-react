import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import HeadPhones from "./HeadPhones";
import Mobiles from "./Mobiles";

const App = () => {
  return (
    <div>
      <h1>Menu</h1>
      <Link to="/mobiles">Mobiles</Link>
      <br />
      <Link to="/head-phones">Head phones</Link>
      <Routes>
        <Route path="/mobiles/*" element={<Mobiles />} />
        <Route path="/head-phones/*" element={<HeadPhones />} />
      </Routes>
    </div>
  );
};

export default App;
