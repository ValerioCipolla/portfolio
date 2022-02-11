import React, { useState } from "react";
import Project from "../Components/Project";
import { projects } from "../data/data";

const Projects = () => {
  const [id, setId] = useState(0);

  function rightArrowHandler() {
    setId(id + 1);
  }

  function leftArrowHandler() {
    setId(id - 1);
  }

  return (
    <div>
      <Project
        title={projects[id].title}
        techStack={projects[id].techStack}
        liveLink={projects[id].liveLink}
        sourceLink={projects[id].sourceLink}
        description={projects[id].description}
        liveLink={projects[id].liveLink}
        sourceLink={projects[id].sourceLink}
        id={projects[id].id}
        rightArrowHandler={rightArrowHandler}
        leftArrowHandler={leftArrowHandler}
        projectsLenght={projects.length}
      />
    </div>
  );
};

export default Projects;
