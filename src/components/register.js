import React, { useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("61a5fa9876f9a6e781a67319");

  const signUp = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/register`, {
        email,
        password,
        role,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Please Register to use this app</h2>
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
      <button onClick={signUp}> Sign Up</button>
    </>
  );
};

export default Register;
