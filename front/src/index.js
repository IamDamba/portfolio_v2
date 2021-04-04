import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LandingContainerVariants,
  LandingChildVariants,
} from "./tools/MotionOptions";

import App from "./App";
import Found404 from "./components/found404/Found404";

import "./styles/index/index.css";

ReactDOM.render(
  <Router>
    <motion.div
      id="landing-page-transition"
      variants={LandingContainerVariants}
      initial="visible"
      animate={["hidden", "last", "end"]}
    >
      <motion.h1 variants={LandingChildVariants}>welcome</motion.h1>
    </motion.div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/project/:id" component={App} />
      <Route exact path="/about" component={App} />
      <Route exact path="/contact" component={App} />
      <Route exact path="/post/:id" component={App} />
      <Route path="*" component={Found404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
