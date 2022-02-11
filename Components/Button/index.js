import React from "react";
import Link from "next/link";
import * as css from "../../styles/button.module.css";

const Button = ({
  text,
  link,
  color,
  setActivePage,
  toPage,
  size,
  internal,
  projectButton,
}) => {
  const classes = `${css.button} ${
    color === "blue"
      ? css.blueButton
      : color === "green"
      ? css.greenButton
      : null
  } ${
    size === "big" ? css.bigButton : size === "small" ? css.smallButton : null
  } ${projectButton ? css.projectButton : null}`;

  if (internal) {
    return (
      <Link href={link}>
        <button className={classes} onClick={() => setActivePage(toPage)}>
          {text}
        </button>
      </Link>
    );
  } else {
    return (
      <a href={link} target="_blank">
        <button className={classes}>{text}</button>
      </a>
    );
  }
};

export default Button;
