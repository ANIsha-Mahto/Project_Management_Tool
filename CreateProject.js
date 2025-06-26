import React, { useState } from "react";
import axios from "axios";

function CreateProject({ onProjectCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/projects", {
        title,
        description,
        deadline,
      });

      // Clear form
      setTitle("");
      setDescription("");
      setDeadline("");

      // Update project list
      onProjectCreated(res.data);
    } catch (err) {
      console.error("Error creating project:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>➕ Create a New Project</h2>

      <div>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <textarea
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <input
          type="date"
          value={deadline}
          required
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <button type="submit">Create Project</button>
    </form>
  );
}

export default CreateProject;
