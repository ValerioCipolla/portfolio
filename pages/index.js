import * as css from "../styles/index.module.css";
import Button from "../Components/Button";

export default function Home({ activePage, setActivePage }) {
  return (
    <div className={css.welcome}>
      <h1>Valerio Cipolla.</h1>
      <h2>Software Engineer & Full Stack Developer</h2>
      <div className={css.buttonSection}>
        <Button
          text="See my work"
          link="/projects"
          type="blue"
          activePage={activePage}
          setActivePage={setActivePage}
          toPage="projects"
        />
        <Button
          text="Get in touch"
          link="/contacts"
          type="green"
          activePage={activePage}
          setActivePage={setActivePage}
          toPage="contacts"
        />
      </div>
    </div>
  );
}
