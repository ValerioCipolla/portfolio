import * as css from "../styles/index.module.css";
import Button from "../Components/Button";

export default function Home() {
  return (
    <div className={css.welcome}>
      <h1>Valerio Cipolla.</h1>
      <h2>Software Engineer & Full Stack Developer</h2>
      <div className={css.buttonSection}>
        <Button text="See my work" link="/" type="blue" />
        <Button text="Get in touch" link="/" type="green"/>
      </div>
    </div>
  );
}
