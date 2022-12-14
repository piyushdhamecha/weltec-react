import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate("about");
  //   };

  return (
    <div className="home">
      <h1>This is the home page</h1>
      <div>
        {/* <button onClick={handleClick}>Click to view our about page</button> */}
        <Link to="about">Click to view our about page</Link>
        {/* <a href="/about">Click to view our about page</a> */}
      </div>
      <div>
        <Link to="contact">Click to view our contact page</Link>
      </div>
    </div>
  );
};

export default Home;
