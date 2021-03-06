import React, { useState } from "react";
import Project from "../Components/Project";
import { projects } from "../data/data";

const Projects = () => {
  const [index, setIndex] = useState(0);

  function rightArrowHandler() {
    if (index >= projects.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function leftArrowHandler() {
    if (index <= 0) {
      setIndex(projects.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <Project
        title={projects[index].title}
        techStack={projects[index].techStack}
        liveLink={projects[index].liveLink}
        sourceLink={projects[index].sourceLink}
        presentationLink={projects[index].presentationLink}
        description={projects[index].description}
        id={projects[index].id}
        rightArrowHandler={rightArrowHandler}
        leftArrowHandler={leftArrowHandler}
        projectsLength={projects.length}
        language={projects[index].language}
      />
    </div>
  );
};

export default Projects;
