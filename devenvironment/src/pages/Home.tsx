import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HelmetHead from "../components/Seo";
import LazyHero from "react-lazy-hero";

import About from "./About";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <React.Fragment>
      <HelmetHead title="DKershner.com" />
      <LazyHero
        imageSrc="/hero-background.jpg"
        color="#000000"
        opacity={0.2}
        minHeight="100vh"
        parallaxOffset={0.5}
        isCentered={true}
        transitionDuration={600}
      >
        <h1>
          <strong>
            <span className="text-primary">{">"}</span>
            <span className="text-white">DKershner.com</span>
            <span className="text-primary">{"<"}</span>
          </strong>
        </h1>
        <h4 className="text-white">
          Full-stack Software Engineer, DevOps, & Cloud Architect
        </h4>
        <h5 className="text-white">
          .Net Core, Kubernetes, Azure DevOps, TypeScript React
        </h5>
        <br />
        <LinkContainer to="/blog">
          <Button size="lg" variant="primary">
            Read the Blog
          </Button>
        </LinkContainer>
      </LazyHero>
      <About />
      <Portfolio />
    </React.Fragment>
  );
};

export default Home;
