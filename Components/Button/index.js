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
    color === "one"
      ? css.buttonOne
      : color === "two"
      ? css.buttonTwo
      : color === "three"
      ? css.buttonThree
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
