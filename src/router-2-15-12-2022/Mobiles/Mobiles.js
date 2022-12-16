import { Link, Route, Routes } from "react-router-dom";
import AppleMobiles from "./AppleMobiles";
import SamungMobiles from "./SamsungMobiles";

const Mobiles = () => {
  return (
    <div>
      <h2> Mobiles</h2>
      <Link to="/mobiles/samsung">Samsung</Link>
      <br />
      <Link to="/mobiles/apple">Apple</Link>
      <Routes>
        <Route path="/samsung" element={<SamungMobiles />} />
        <Route path="/apple" element={<AppleMobiles />} />
      </Routes>
    </div>
  );
};

export default Mobiles;
