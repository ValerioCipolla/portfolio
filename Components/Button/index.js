import React from "react";
import Link from "next/link";
import * as css from "../../styles/button.module.css";

const Button = ({ text, link, type }) => {
  return (
    <button className={type === "blue" ? css.blueButton : css.greenButton}>
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </button>
  );
};

export default Button;
