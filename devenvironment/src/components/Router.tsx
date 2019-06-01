import React from "react";
import { Switch, Route } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/blog/Blog";
import Post from "../pages/blog/Post";
import Error from "../Error";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/blog" component={Blog} />
    <Route path="/blog/category/:category" component={Blog} />
    <Route path="/blog/:handle" component={Post} />
    <Route component={Error} status={404} />
  </Switch>
);

export default AppRouter;
