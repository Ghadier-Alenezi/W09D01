import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

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

  // update task by id
  const updateTask = async (id) => {
    await axios.put(
      `${BASE_URL}/updateTask/${id}`,
      {
        name: updateTask,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  //   delete task by id
  const deleteTask = async (id) => {
    await axios.delete(`${BASE_URL}/deleteTask/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  //   log out user
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  //
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
          <button onClick={() => updateTask(elem._id)}>update</button>
          <button onClick={() => deleteTask(elem._id)}>delete</button>
        </ul>
      ))}
      <input
        type="text"
        name="task"
        placeholder="newTask"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>add</button>
      <hr />
      <br />
      <h2>Do you want to log out?</h2>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

export default Home;
