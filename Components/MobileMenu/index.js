import React from "react";
import Link from "next/link";
import * as css from "../../styles/mobileMenu.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const MobileMenu = ({ setIsOpen, activePage, setActivePage }) => {
  return (
    <div className={css.menu}>
      <ul className={css.list}>
        <li>
          <Link href="/">
            <a
              onClick={() => {
                setIsOpen(false);
                setActivePage("home");
              }}
              className={activePage === "home" ? css.active : null}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              onClick={() => {
                setIsOpen(false);
                setActivePage("about");
              }}
              className={activePage === "about" ? css.active : null}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a
              onClick={() => {
                setIsOpen(false);
                setActivePage("projects");
              }}
              className={activePage === "projects" ? css.active : null}
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <a
              onClick={() => {
                setIsOpen(false);
                setActivePage("contacts");
              }}
              className={activePage === "contacts" ? css.active : null}
            >
              Contacts
            </a>
          </Link>
        </li>
      </ul>
      <div className={css.icons}>
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
};

export default MobileMenu;
