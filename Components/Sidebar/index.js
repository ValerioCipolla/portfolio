import React from "react";
import * as css from "../../styles/sidebar.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useWindowSize } from "../../hooks/useWindowSize";
const Sidebar = () => {
  const windowSize = useWindowSize();

  if (windowSize.width > 700) {
    return (
      <div className={css.sidebar}>
        <div className={css.icon}>
          <a href="https://github.com/ValerioCipolla" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div className={css.icon}>
          <a
            href="https://www.linkedin.com/in/valerio-cipolla-software-engineer/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className={css.icon}>
          <a href="mailto: valeriocipolla92@gmail.com" target="_blank">
            <MdEmail />
          </a>
        </div>
      </div>
    );
  } else {
    return <div className={css.hidden}></div>;
  }
};

export default Sidebar;
