import React from "react";
import Link from "next/link";
import * as css from "../../styles/button.module.css";

const Button = ({ text, link, type, setActivePage, toPage, size }) => {
  const classes = `${css.button} ${
    type === "blue" ? css.blueButton : type === "green" ? css.greenButton : null
  } ${size === "big" ? css.bigButton : css.smallButton}`;
  return (
    <Link href={link}>
      <button className={classes} onClick={() => setActivePage(toPage)}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
