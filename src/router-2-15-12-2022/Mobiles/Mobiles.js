import { Link, Outlet } from "react-router-dom";
// import AppleMobiles from "./AppleMobiles";
// import SamungMobiles from "./SamsungMobiles";

const Mobiles = (props) => {
  console.log(props);
  return (
    <div>
      <h2> Mobiles</h2>
      <Link to="samsung">Samsung</Link>
      <br />
      <Link to="apple">Apple</Link>
      <Outlet />
      {/* <Routes>
        <Route path="/samsung" element={<SamungMobiles />} />
        <Route path="/apple" element={<AppleMobiles />} />
      </Routes> */}
    </div>
  );
};

export default Mobiles;
