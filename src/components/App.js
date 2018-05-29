import React from "react";
import Navigation from "./Navigation/Navigation";
import BigLogo from "./Logo/Logo";
import About from "./About/About";
import Projects from "./ProjectsDashboard/ProjectsDashboard";
import ProjectsBox from "./ProjectsBox/ProjectsBox";

const App = () => {
  return (
    <div>
      <Navigation />
      <BigLogo />
      <About />
      <Projects />
      <ProjectsBox />
    </div>
  );
};

export default App;
