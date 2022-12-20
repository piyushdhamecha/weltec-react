import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import HeadPhones from "./HeadPhones";
import Mobiles from "./Mobiles";
import SamungMobiles from "./Mobiles/SamsungMobiles";
import AppleMobiles from "./Mobiles/AppleMobiles";
import BoatHeadPhones from "./HeadPhones/BoatHeadPhones";
import OnePlus from "./HeadPhones/OnePlus";

const App = () => {
  return (
    <div>
      <h1>Menu</h1>
      <Link to="/mobiles">Mobiles</Link>
      <br />
      <Link to="/head-phones">Head phones</Link>
      <Routes>
        <Route path="mobiles" element={<Mobiles />}>
          <Route path="samsung" element={<SamungMobiles />} />
          <Route path="apple" element={<AppleMobiles />} />
        </Route>
        <Route path="head-phones" element={<HeadPhones />}>
          <Route path="boat" element={<BoatHeadPhones />} />
          <Route path="one-plus" element={<OnePlus />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
