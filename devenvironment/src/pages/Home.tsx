import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import HelmetHead from "../components/Seo";
import LazyHero from "react-lazy-hero";
import Arrow from "react-arrow";
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
        <Container>
          <Row>
            <Col>
              <h1>
                <strong>
                  <span className="display-4 text-primary">{">"}</span>
                  <span className="display-4 text-white">Derek Kershner</span>
                  <span className="display-4 text-primary">{"<"}</span>
                </strong>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="text-white">
                Full-stack Software Engineer, DevOps Practitioner, & Cloud
                Architect
              </h4>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <ScrollLink to="about" smooth={true}>
                <Button variant="primary">
                  <Arrow
                    direction="down"
                    shaftWidth={25}
                    shaftLength={25}
                    headWidth={50}
                    headLength={25}
                    fill="white"
                    stroke="white"
                    strokeWidth={1}
                  />
                </Button>
              </ScrollLink>
            </Col>
          </Row>
        </Container>
      </LazyHero>
      <About />
      <PortfolioMenu />
      <Social />
    </React.Fragment>
  );
};

export default Home;
