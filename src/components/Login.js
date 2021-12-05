import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [role, setRole] = useState("61a5fa9876f9a6e781a67319");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.token) {
        setToken(result.data.token);
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
const toRegister = ()=>{
  navigate("/register")
}
  return (
    <>
      <h2>Please Login</h2>
      <hr />
      <br />
      <h3>Your Email</h3>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <hr />
      <br />
      <h3>Your Password</h3>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <hr />
      <br />
      <button onClick={login}> Sign in</button>
      <hr />
      <br />
      <h3>You don't have account yet?</h3>
      <button onClick={toRegister}>Sign Up Now</button>
    </>
  );
};

export default Login;

// if (result.data.result.role === "61a5fa8e76f9a6e781a67317") {
//   setRole("admin");
// } else if (result.data.result.role === "61a5fa9876f9a6e781a67319") {
//   setRole("user");
// }
