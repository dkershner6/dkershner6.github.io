import React from "react";
import { Switch, Route } from "react-router";

import Home from "../pages/Home";
import About from "../pages/home/About";
import PortfolioMenu from "../pages/home/PortfolioMenu";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import PostPage from "../pages/blog/PostPage";
import Error from "../Error";
import ResumesNav from "../pages/resumes/ResumesNav";
import Resume from "../pages/Resume";
import TechnologyPage from "../pages/TechnologyPage";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/portfolio/" component={PortfolioMenu} />
    <Route path="/portfolio/:project" component={Portfolio} />
    <Route exact path="/blog" component={Blog} />
    <Route path="/blog/technology/:technologyId" component={Blog} />
    <Route path="/blog/:handle" component={PostPage} />
    <Route exact path="/r" component={ResumesNav} />
    <Route path="/r/:company" component={Resume} />
    {/*<Route
      exact
      path="/technologies/:technologyType"
      component={TechnologyPage}
    />*/}
    <Route
      path="/technologies/:technologyType/:technologyId"
      component={TechnologyPage}
    />
    <Route component={Error} status={404} />
  </Switch>
);

export default AppRouter;
