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
        certifications -
        <span className={css.blueText}> Responsive Web Design </span> and
        <span className={css.greenText}>
          {" "}
          JavaScript Algorithms and Data Structure{" "}
        </span>
        - after that I knew I was in love with JavaScript. I kept improving and
        learning through multiple Udemy courses and in November 2021 I started a{" "}
        <span className={css.emphasis}>
          4 months Full-Stack Software Development Bootcamp
        </span>{" "}
        with{" "}
        <a href="https://www.schoolofcode.co.uk/" target="_blank">
          SchoolOfCode
        </a>
        .
      </p>
      <p>
        The bootcamp has been amazing and I love learning new things everyday, I
        am looking forward to starting my career as a Software Engineer to work
        on real-world problems and potentially improve people's lives through
        software.
      </p>
      <p>
        I am a naturally curious person and obsessed with "self-improvement", I
        am always learning something new. Before finding my love for coding I
        was a certified Personal Trainer and Sports Massage Therapist, and in
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
