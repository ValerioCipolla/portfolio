import React, {useEffect} from "react";
import Button from "../Button";
import * as css from "../../styles/project.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({
  title,
  techStack,
  description,
  sourceLink,
  liveLink,
  id,
  leftArrowHandler,
  rightArrowHandler,
  projectsLength,
}) => {
  const windowSize = useWindowSize();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={css.container} data-aos="fade-down">
        <div className={css.counterContainer}>
          <div className={css.arrow}>
            <FaAngleLeft onClick={() => leftArrowHandler()} />
          </div>
          <p className={css.projectCounter}>
            Project {id}/{projectsLength}
          </p>
          <div className={css.arrow}>
            <FaAngleRight onClick={() => rightArrowHandler()} />
          </div>
        </div>
        <div className={css.slider}>
          {windowSize.width > 700 && (
            <div className={css.arrow}>
              <FaAngleLeft onClick={() => leftArrowHandler()} />
            </div>
          )}
          <div className={css.card}>
            <h1 className={css.title}>{title}</h1>
            <div className={css.buttonSection}>
              <Button
                text="Live site"
                link={liveLink}
                color="blue"
                size="small"
                projectButton={true}
              />
              <Button
                text="Source code"
                link={sourceLink}
                color="green"
                size="small"
                projectButton={true}
              />
            </div>
            <h4 className={css.heading}>Tech Stack:</h4>
            <p className={css.techStack}>{techStack}</p>
            <h4 className={css.heading}>The Story:</h4>
            <p className={css.description}>{description}</p>
          </div>
          {windowSize.width > 700 && (
            <div className={css.arrow}>
              <FaAngleRight onClick={() => rightArrowHandler()} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
