import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const allTasks = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  //   add new task
  const addTask = async () => {
    try {
      const result = await axios.post(
        `${BASE_URL}/newTask`,
        {
          name: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      allTasks(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allTasks();
  }, []);

  return (
    <>
      <h2>Task Tracker </h2>
      <hr />
      <br />
      {tasks.map((elem, i) => (
        <ul>
          <li key={i}>{elem.name}</li>
        </ul>
      ))}
      <input
        type="text"
        name="task"
        placeholder="newTask"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>add</button>
    </>
  );
};

export default Home;
