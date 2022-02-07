import React from "react";
import Link from "next/link";
import * as css from "../../styles/button.module.css";

const Button = ({ text, link, type, activePage, setActivePage, toPage }) => {
  const classes = `${css.button} ${
    type === "blue" ? css.blueButton : type === "green" ? css.greenButton : null
  }`;
  return (
    <Link href={link}>
      <button className={classes} onClick={() => setActivePage(toPage)}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
