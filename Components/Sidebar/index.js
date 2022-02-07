import React from "react";
import * as css from "../../styles/sidebar.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.icon}>
        <BsGithub />
      </div>
      <div className={css.icon}>
        <BsLinkedin />
      </div>
      <div className={css.icon}>
        <MdEmail />
      </div>
    </div>
  );
};

export default Sidebar;
