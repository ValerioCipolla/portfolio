import React from "react";
import * as css from "../styles/about.module.css";

const About = () => {
  return (
    <div className={css.about}>
      <h1>About Me</h1>
      <p>
        Hi there, thanks for checking out my portfolio.
        <br /> I am a<span className={css.blueText}> Software Engineer </span>
        and <span className={css.greenText}>Full Stack Developer</span> with a
        deep understanding of Javascript. I can build full-stack applications
        using React JS for the front-end, Node.js and PostgreSQL for the
        back-end.
      </p>
      <p>
        I enjoy building things for web and creating interactive, fast and
        easy-to-use interfaces. I became interested in Software engineering in
        May 2021, and I have been studying and improving since then. I started
        by following the freeCodeCamp curriculum and completing the first 2
        certifications -{" "}
        <a
          href="https://www.freecodecamp.org/certification/valeriocipolla/responsive-web-design"
          target="_blank"
        >
          Responsive Web Design
        </a>{" "}
        and{" "}
        <a
          href="https://www.freecodecamp.org/certification/valeriocipolla/javascript-algorithms-and-data-structures"
          target="_blank"
        >
          JavaScript Algorithms and Data Structure
        </a>{" "}
        - after that I knew I was in love with JavaScript and wanted to become a
        full-time Software Engineer. I kept improving and learning through
        multiple Udemy courses and in November 2021 I decided to change my life
        forever and start a{" "}
        <span className={css.greenText}>
          16 weeks Full-Stack Software Development Bootcamp
        </span>{" "}
        with{" "}
        <a href="https://www.schoolofcode.co.uk/" target="_blank">
          SchoolOfCode
        </a>
        .
      </p>
      <p>
        The bootcamp has been amazing and I genuinely feel like what I have
        learnt in 4 months at the Bootcamp would have taken me 18/24 months of
        studying on my own! On the course we learnt how to build, test, and
        deploy <span className={css.blueText}>full-stack applications</span>{" "}
        with the help of technologies like: Git, HTML, CSS, JavaScript, React
        JS, Node.js, TypeScript, PostgreSQL, Jest, Cypress, Docker, Heroku,
        Netlify and many more.
      </p>
      <p>
        The course was 100% remote and it didn't just teach me how to code, but
        it also taught me how to work remotely and effectively within a team. A
        lot of emphasis was put on learning{" "}
        <span className={css.greenText}>Agile Principles</span> which really
        paid off during the week 9 project, and the final 4 weeks-long project.{" "}
        <br />
        All of the learning and building during the course was done using{" "}
        <span className={css.blueText}>Pair-Programming</span> and Git for
        version control, including branching, pull requests, merge requests and
        solving conflicts.
      </p>
      <p>
        I am looking forward to starting my career as a Software Engineer to
        work on <span className={css.greenText}>real-world problems</span> and
        potentially improve people's lives through software. Naturally curious
        and obsessed with <span className={css.blueText}>self-improvement</span>
        , I am always learning something new. Before finding my love for coding
        I was a certified Personal Trainer and Sports Massage Therapist, and in
        2020 I earned a Bachelor's degree in Psychology. I am confident the
        people skills I gained through my previous employment and my knowledge
        about the human mind and body will prove very valuable in my engineering
        career.
      </p>
      <p>
        In my free time I enjoy problem solving activities. I love playing chess
        and I am a Brazilian Jiu Jitsu Purple Belt (6 years training).
      </p>
    </div>
  );
};

export default About;
