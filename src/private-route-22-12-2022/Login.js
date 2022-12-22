import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Username and password is required field");
      return;
    }

    props.onSubmit(username, password);
    // setTimeout(() => {
    //   if (username === "piyush" && password === "piyush123") {
    //     console.log("Is admin");
    //     navigate("/admin-dashboard");
    //   } else {
    //     console.log("Normal user");
    //     navigate("/dashboard");
    //   }
    // }, 2000);
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
