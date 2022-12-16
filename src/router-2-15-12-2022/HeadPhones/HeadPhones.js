import { Link, Route, Routes } from "react-router-dom";
import BoatHeadPhones from "./BoatHeadPhones";
import OnePlus from "./OnePlus";

const HeadPhones = () => {
  return (
    <div>
      <h2>Head phones</h2>
      <Link to="/head-phones/boat">Boat</Link>
      <br />
      <Link to="/head-phones/one-plus">One plus</Link>
      <Routes>
        <Route path="/boat" element={<BoatHeadPhones />} />
        <Route path="/one-plus" element={<OnePlus />} />
      </Routes>
    </div>
  );
};

export default HeadPhones;
