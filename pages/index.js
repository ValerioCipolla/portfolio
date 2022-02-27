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
    <div className={css.flexContainer}>
      <div className={css.welcome} data-aos="fade-down">
        <div>
          <h1>
            Hello, World.
            <br />I am <br />
           <span className={css.name}>VALERIO CIPOLLA</span>
          </h1>
          <h2>
            Software Engineer & <br />
            Full Stack Developer
          </h2>
        </div>
        <div className={css.buttonSection}>
          <Button
            text="See my work"
            link="/projects"
            color="one"
            setActivePage={setActivePage}
            toPage="projects"
            size="big"
            internal={true}
          />
          <Button
            text="Get in touch"
            link="/contacts"
            color="two"
            setActivePage={setActivePage}
            toPage="contacts"
            size="big"
            internal={true}
          />
        </div>
      </div>
    </div>
  );
}
