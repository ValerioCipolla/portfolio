import React, { useEffect } from "react";
import * as css from "../styles/contacts.module.css";
import Button from "../Components/Button";
import { useWindowSize } from "../hooks/useWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  const windowSize = useWindowSize();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={css.gridContainer}>
      <div className={css.container} data-aos="fade-down">
        <div className={css.textContainer}>
          <h1 className={css.heading}>Get in touch</h1>
          <p className={css.paragraph}>
            Thanks for stopping by, <br /> hope you had a good time. Let's stay
            in touch.
          </p>
        </div>
        <div className={css.buttonSection}>
          <Button
            text="github"
            link="https://github.com/ValerioCipolla"
            color="one"
            size="big"
            interal={false}
            projectButton={false}
          />
          <Button
            text="linkedin"
            link="https://www.linkedin.com/in/valerio-cipolla-software-engineer/"
            color="two"
            size="big"
            interal={false}
            projectButton={false}
          />
          <Button
            text="e-mail"
            link="mailto: valeriocipolla92@gmail.com"
            color="three"
            size="big"
            interal={false}
            projectButton={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
