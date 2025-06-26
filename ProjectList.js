import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskManager from "./TaskManager";

function ProjectList({ newProject }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, [newProject]);

  return (
    <div>
      <h2>📁 All Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id} style={{ marginBottom: "2rem" }}>
              <strong>{project.title}</strong> — {project.description}
              <br />
              <small>Deadline: {project.deadline?.slice(0, 10)}</small>
              <TaskManager projectId={project._id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
