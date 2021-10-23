import React, { useRef, useState } from "react";
import CV from "../../media/cv.pdf";

import "../../styles/about/about.css";

const About = () => {
  const landingPageRef = document.getElementById("landing-page-transition");
  console.log(landingPageRef);

  const handleDownload = (e) => {
    let downloadLink = document.createElement("a");
    downloadLink.href = CV;
    downloadLink.click();
    e.preventDefault();
  };

  return (
    <main className="about">
      <div className="about_information">
        <div className="information_header">
          <h1>About</h1>
        </div>
        <p>
          Based in Paris, I am a{" "}
          <u>
            <b>Front-End Developer</b>
          </u>{" "}
          passionnate about web and mobile design.
        </p>
        <p>
          I tend to be attracted by interactive project likes games, apps and
          website using development technologies like Barba, Framer Motion,
          GreenSock-GSAP and javascript and enjoy creating new visual worlds
          that can touch and inspire others.
        </p>
        <p>
          I'am also specialized on the MERN Stack (MongoDB, Express, ReatcJS,
          NodeJS), Google Firebase and also have some knowledge on other tools
          like NextJS, WebServices, Github, Heroku and Vercel.
        </p>
        <p>
          If you want to know more about me, don't hesitate to read my CV down
          below !!
        </p>
        <button onClick={handleDownload.bind(this)}>Download CV</button>
      </div>
    </main>
  );
};

export default About;
