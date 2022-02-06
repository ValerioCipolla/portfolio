import React from "react";
import Link from "next/link";
import * as css from "../../styles/mobileMenu.module.css";

const MobileMenu = ({ setIsOpen }) => {
  return (
    <div className={css.menu}>
      <ul className={css.list}>
        <li>
          <Link href="/">
            <a onClick={() => setIsOpen(false)}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={() => setIsOpen(false)}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={() => setIsOpen(false)}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={() => setIsOpen(false)}> Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
