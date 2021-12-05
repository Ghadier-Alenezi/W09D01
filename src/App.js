import React, { useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div>
      <h1>Hello</h1>
      <h2>Please Register to use this app</h2>
      <hr />
      <br />
      <h3>Your Name</h3>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <hr />
      <br />
      <h3>Your Email</h3>
      <input
        type="email"
        placeholder="email"
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
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <hr />
      <br />
      <button>Sign Up</button>
    </div>
  );
};

export default App;
