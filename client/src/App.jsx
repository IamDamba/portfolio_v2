import React from "react";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionVariants } from "./tools/MotionOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Project from "./components/project/Project";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";

import Logo from "./media/logo/logo.svg";

const App = () => {
  const location = useLocation();

  return (
    <div className="container">
      <header>
        <div className="header_logo">
          <Link to="/">
            <img src={Logo} alt="logo.png" />
          </Link>
        </div>
      </header>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={location.pathname}
          id="transition-page"
          variants={TransitionVariants}
          initial="visible"
          animate={['hidden', 'end']}
        />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/project/:id" component={Project} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      <footer>
        <div className="footer_navbar_social_media">
          <a
            href="https://www.instagram.com/iam.damba.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://fr.linkedin.com/in/jordi-ngwebo-damba-0228b0148"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/damba720"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
        <ul className="footer_navbar_menu">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="footer_copyright">
          <p>Copyright @2021. IamDamba. All right reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default App;
