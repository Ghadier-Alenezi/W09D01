import React, { useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

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
            Authorization: `Bearer` + token,
          },
        }
      );
      // console.log(result.data.token);
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      // console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

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
    </>
  );
};

export default Login;
