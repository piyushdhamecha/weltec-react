import { Link, Outlet, Route, Routes } from "react-router-dom";
import BoatHeadPhones from "./BoatHeadPhones";
import OnePlus from "./OnePlus";

const HeadPhones = () => {
  return (
    <div>
      <h2>Head phones</h2>
      <Link to="boat">Boat</Link>
      <br />
      <Link to="one-plus">One plus</Link>
      <Outlet />
      {/* <Routes>
        <Route path="/boat" element={<BoatHeadPhones />} />
        <Route path="/one-plus" element={<OnePlus />} />
      </Routes> */}
    </div>
  );
};

export default HeadPhones;
