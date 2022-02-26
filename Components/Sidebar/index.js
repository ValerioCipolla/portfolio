import React from "react";
import Link from "next/link";
import * as css from "../../styles/sidebar.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import BurgerMenu from "../BurgerMenu";
import { useWindowSize } from "../../hooks/useWindowSize";
const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  const windowSize = useWindowSize();

  if (windowSize.width > 700) {
    return (
      <div className={css.sidebar}>
        <ul className={css.nav}>
          <li>
            <Link href="/">
              <a
                onClick={() => setActivePage("home")}
                className={activePage === "home" ? css.active : null}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                onClick={() => setActivePage("about")}
                className={activePage === "about" ? css.active : null}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                onClick={() => setActivePage("projects")}
                className={activePage === "projects" ? css.active : null}
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a
                onClick={() => setActivePage("contacts")}
                className={activePage === "contacts" ? css.active : null}
              >
                Contacts
              </a>
            </Link>
          </li>
        </ul>
        <div className={css.iconFlex}>
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
      </div>
    );
  } else {
    return (
      <BurgerMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    );
  }
};

export default Sidebar;
