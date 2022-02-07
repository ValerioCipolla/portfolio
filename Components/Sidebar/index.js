import React from "react";
import * as css from "../../styles/sidebar.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.icon}>
        <a href="https://github.com/ValerioCipolla" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className={css.icon}>
        <a href="https://github.com/ValerioCipolla" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div className={css.icon}>
        <a href="https://github.com/ValerioCipolla" target="_blank">
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
