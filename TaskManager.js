import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/tasks`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]); // ✅ Fixes ESLint warning

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/tasks`, {
        title: newTask,
        completed: false,
      })
      .then(() => {
        fetchTasks();
        setNewTask("");
      })
      .catch((err) => console.error("Error adding task:", err));
  };

  return (
    <div>
      <h2>📝 Task Manager</h2>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} — {task.completed ? "✅ Done" : "⏳ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
