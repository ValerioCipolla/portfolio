import React, { useState } from "react";
import Link from "next/link";
import * as css from "../../styles/navbar.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import BurgerMenu from "../BurgerMenu";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");
  const windowSize = useWindowSize();

  if (windowSize.width > 500) {
    return (
      <nav>
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
            <Link href="/">
              <a
                onClick={() => setActivePage("about")}
                className={activePage === "about" ? css.active : null}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                onClick={() => setActivePage("projects")}
                className={activePage === "projects" ? css.active : null}
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                onClick={() => setActivePage("contacts")}
                className={activePage === "contacts" ? css.active : null}
              >
                Contacts
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return <BurgerMenu />;
  }
};

export default Navbar;
