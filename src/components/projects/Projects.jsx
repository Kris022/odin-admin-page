// Projects Grid
import "./style.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="main-wrapper">
      <h3>Your Projects</h3>
      <div className="projects-grid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="info-panel">
        
      </div>
    </div>
  );
};

export default Projects;
