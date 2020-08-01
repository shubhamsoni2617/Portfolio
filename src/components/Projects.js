import React from "react";
import projectElements from "../projects";
import ProjectItem from "./ProjectItem";
import { useSelector } from "react-redux";

const Projects = () => {
  // const projectArray = Object.values(projectElements);
  const project = useSelector((state) => state.project);

  return (
    <div className="project-div">
      <ul className="projects">
        {/* {projectArray.map((project) => (
          <li key={project.name}>
            <ProjectItem project={project} />
          </li>
        ))} */}
        <h1>Official Projects</h1>
        {project.official.map((projectDetail) => (
          <li key={projectDetail.title}>
            <ProjectItem project={projectDetail} />
          </li>
        ))}
        <h1>Side Projects</h1>
        {project.side.map((projectDetail) => (
          <li key={projectDetail.title}>
            <ProjectItem project={projectDetail} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
