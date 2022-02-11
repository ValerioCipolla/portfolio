import React from "react";
import Button from "../Button";
import * as css from "../../styles/project.module.css";

const Project = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Title</h1>
      <div className={css.buttonSection}>
        <Button text="Live site" link="/projects" type="blue" />
        <Button text="Source code" link="/contacts" type="green" />
      </div>
      <h4>Tech Stack:</h4>
      <p>Placeholder, Placeholder, Placeholder</p>
      <h4>Description:</h4>
      <p>
        Lorem ipsum dolor sit amet. In quaerat quibusdam ea molestiae fuga sit
        ducimus aliquam qui rerum perspiciatis. Ut quaerat quia ut dolores
        facilis ut exercitationem ducimus est commodi quas? Non quia
        necessitatibus est eveniet optio et perferendis suscipit et libero
        voluptate. 33 quibusdam quidem ab ipsa ratione At molestiae voluptatem.
        Ex amet dolorum et galisum suscipit ab voluptatem nisi! Vel rerum
        consequatur ut consectetur nemo sed consequatur incidunt ut labore
        internos eum consequatur dolore a sapiente illo eum maxime quaerat?
      </p>
    </div>
  );
};

export default Project;
