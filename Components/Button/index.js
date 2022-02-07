import React from "react";
import Link from "next/link";
import * as css from "../../styles/button.module.css";

const Button = ({ text, link, type }) => {
  const classes = `${css.button} ${
    type === "blue" ? css.blueButton : type === "green" ? css.greenButton : null
  }`;
  return (
    <Link href={link}>
      <button className={classes}>{text}</button>
    </Link>
  );
};

export default Button;
