import React from "react";
import Project from "../Components/Project";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <Project
            title={project.title}
            techStack={project.techStack}
            liveLink={project.liveLink}
            sourceLink={project.sourceLink}
            description={project.description}
            liveLink={project.liveLink}
            sourceLink={project.sourceLink}
          />
        );
      })}
    </div>
  );
};

export default Projects;
