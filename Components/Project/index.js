import React, { useEffect } from "react";
import Button from "../Button";
import * as css from "../../styles/project.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { useWindowSize } from "../../hooks/useWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({
  title,
  techStack,
  description,
  sourceLink,
  liveLink,
  presentationLink,
  id,
  leftArrowHandler,
  rightArrowHandler,
  projectsLength,
  language,
}) => {
  const windowSize = useWindowSize();
  useEffect(() => {
    AOS.init();
  }, []);

  console.log(language);

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
              {liveLink && (
                <Button
                  text="Live site"
                  link={liveLink}
                  color="one"
                  size="small"
                  projectButton={true}
                />
              )}
              <Button
                text="Source code"
                link={sourceLink}
                color="two"
                size="small"
                projectButton={true}
              />
              {presentationLink && (
                <Button
                  text="Live Demo"
                  link={presentationLink}
                  color="three"
                  size="small"
                  projectButton={true}
                />
              )}
            </div>
            <div className={css.techStackFlex}>
              <div>
                <h4 className={css.heading}>Tech Stack:</h4>
                <p className={css.techStack}>{techStack}</p>
              </div>
              <h4 className={css.languageIcon}>
                {language === "JavaScript" ? (
                  <SiJavascript />
                ) : language === "Python" ? (
                  <SiPython />
                ) : (
                  ""
                )}
              </h4>
            </div>
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
