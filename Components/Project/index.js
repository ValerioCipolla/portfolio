import React from "react";
import Button from "../Button";
import * as css from "../../styles/project.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Project = ({ title, techStack, description }) => {
  return (
    <>
      <div className={css.container}>
        <p className={css.projectCounter}>Project 1/10</p>
        <div className={css.slider}>
          <div className={css.arrow}>
            <FaAngleLeft />
          </div>
          <div className={css.card}>
            <h1 className={css.title}>{title}</h1>
            <div className={css.buttonSection}>
              <Button text="Live site" link="/" type="blue" size="small" />
              <Button text="Source code" link="/" type="green" size="small" />
            </div>
            <h4>Tech Stack:</h4>
            <p>{techStack}</p>
            <h4>Description:</h4>
            <p className={css.description}>{description}</p>
          </div>
          <div className={css.arrow}>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
