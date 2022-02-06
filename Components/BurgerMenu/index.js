import React from "react";
import * as css from "../../styles/burgerMenu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const BurgerMenu = () => {
  return (
    <div className={css.burger}>
    <div className={css.icon}>
      <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default BurgerMenu;
