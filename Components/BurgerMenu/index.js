import React from "react";
import * as css from "../../styles/burgerMenu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "../MobileMenu";

const BurgerMenu = ({ activePage, setActivePage, isOpen, setIsOpen }) => {

  return (
    <div className={css.burgerMenu}>
      <div className={css.icon} onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </div>
      {isOpen && (
        <MobileMenu
          setIsOpen={setIsOpen}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
    </div>
  );
};

export default BurgerMenu;
