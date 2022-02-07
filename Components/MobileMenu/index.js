import React from "react";
import Link from "next/link";
import * as css from "../../styles/mobileMenu.module.css";

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
              {" "}
              Contacts
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
