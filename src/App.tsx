
import { useState } from 'react';
import "./App.css";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import Input from "./Components/Input";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import * as React from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    SelectProjectId: undefined,
    projects: []
  });
  function handleStartAddProject() {
    setProjectsState(PrevState => {
      return {
        ...PrevState, selectedId: null,
      }
    })
  }
  let content;
  if (projectsState.selectedId === null) {
    content = <NewProject />
  } else if (projectsState.selectedId === undefined) {

    content = <NoProjectSelected onstartAddProject={handleStartAddProject} />
  }



  return (

    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onstartAddProject={handleStartAddProject} />

      {content}

    </main>



  )
}

export default App
