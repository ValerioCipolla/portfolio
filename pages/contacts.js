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
    <div className={css.container} data-aos="fade-down">
      <h1 className={css.heading}>Get in touch</h1>
      <p className={css.paragraph}>
        Thanks for stopping by, hope you had a good time.
      </p>
      <p className={css.paragraph}>Let's stay in touch.</p>

      <div className={css.buttonSection}>
        <Button
          text={windowSize.width > 700 ? "follow on github" : "github"}
          link="https://github.com/ValerioCipolla"
          color="green"
          size="big"
          interal={false}
          projectButton={false}
        />
        <Button
          text={windowSize.width > 700 ? "connect on linkedin" : "linkedin"}
          link="https://www.linkedin.com/in/valerio-cipolla-software-engineer/"
          color="blue"
          size="big"
          interal={false}
          projectButton={false}
        />
        <Button
          text={windowSize.width > 700 ? "send an e-mail" : "e-mail"}
          link="mailto: valeriocipolla92@gmail.com"
          color="white"
          size="big"
          interal={false}
          projectButton={false}
        />
      </div>
    </div>
  );
};

export default Contacts;
