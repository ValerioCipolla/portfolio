import * as css from "../styles/index.module.css";
import Button from "../Components/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home({ setActivePage }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={css.welcome} data-aos="fade-down">
      <h1>Valerio Cipolla.</h1>
      <h2>Software Engineer & Full Stack Developer</h2>
      <div className={css.buttonSection}>
        <Button
          text="See my work"
          link="/projects"
          color="blue"
          setActivePage={setActivePage}
          toPage="projects"
          size="big"
          internal={true}
        />
        <Button
          text="Get in touch"
          link="/contacts"
          color="green"
          setActivePage={setActivePage}
          toPage="contacts"
          size="big"
          internal={true}
        />
      </div>
    </div>
  );
}
