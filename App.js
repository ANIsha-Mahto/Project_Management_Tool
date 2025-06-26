import React, { useState } from "react";
import ProjectList from "./ProjectList";
import CreateProject from "./CreateProject";

function App() {
  const [newProject, setNewProject] = useState(null);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📋 Project Management Tool</h1>

      <CreateProject onProjectCreated={setNewProject} />
      <ProjectList newProject={newProject} />
    </div>
  );
}

export default App;
