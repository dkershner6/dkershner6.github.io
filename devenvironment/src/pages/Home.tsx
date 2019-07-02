import React from "react";
import { Button } from "react-bootstrap";
import HelmetHead from "../components/Seo";
import LazyHero from "react-lazy-hero";
import { Link as ScrollLink } from "react-scroll";

import About from "./home/About";
import PortfolioMenu from "./home/PortfolioMenu";
import Social from "./home/Social";

const Home = () => {
  return (
    <React.Fragment>
      <HelmetHead title="DKershner.com" />
      <LazyHero
        imageSrc="/images/hero-background.jpg"
        color="#000000"
        opacity={0.2}
        minHeight="100vh"
        parallaxOffset={0.5}
        isCentered={true}
        transitionDuration={600}
      >
        <h1>
          <strong>
            <span className="display-4 text-primary">{">"}</span>
            <span className="display-4 text-white">Derek Kershner</span>
            <span className="display-4 text-primary">{"<"}</span>
          </strong>
        </h1>
        <h4 className="text-white">
          Full-stack Software Engineer, DevOps, & Cloud Architect
        </h4>
        <br />
        <ScrollLink to="portfolio" smooth={true}>
          <Button size="lg" variant="primary">
            See Portfolio
          </Button>
        </ScrollLink>
      </LazyHero>
      <About />
      <PortfolioMenu />
      <Social />
    </React.Fragment>
  );
};

export default Home;
