import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../context/AuthContext";
import "./Tasks.css";

function Tasks() {
  const { token,email } = useContext(AuthContext); // Getting logged-in worker details
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:5000/book/bookings")
        .then((res) => {
          // Filter tasks where worker email matches logged-in worker email
          const filteredTasks = res.data.filter(
            (task) => task.workerEmail === email
          );
          setTasks(filteredTasks);
        })
        .catch((err) => console.error("Failed to fetch tasks:", err));
    }
  }, [token]);

  return (
    <div className="tasks-container">
      <h2>Your Booked Tasks 📝</h2>
      {tasks.length === 0 ? (
        <p>No Bookings Found 😕</p>
      ) : (
        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task._id} className="task-card">
              <h4>Customer Name: {task.name}</h4>
              <p>Address: {task.address}, {task.city}</p>
              <p>Phone: {task.phone}</p>
              <p>Email: {task.email}</p>
              <p>Booked At: {new Date(task.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;
