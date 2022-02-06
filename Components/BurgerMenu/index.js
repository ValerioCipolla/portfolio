import React, { useState } from "react";
import * as css from "../../styles/burgerMenu.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "../MobileMenu";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.burgerMenu}>
      <div className={css.icon} onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </div>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </div>
  );
};

export default BurgerMenu;
