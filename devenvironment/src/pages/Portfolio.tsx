import React from "react";
import { Container, Button } from "react-bootstrap";
import LazyHero from "react-lazy-hero";
import { LinkContainer } from "react-router-bootstrap";

const Portfolio = () => {
  return (
    <React.Fragment>
      {/*<HelmetHead title='Portfolio | DKershner.com' />*/}
      <div id="portfolio" className="page-header" style={{ padding: 40 }}>
        <h1 className="text-center">Portfolio</h1>
      </div>
      <LazyHero
        imageSrc="/babywise.jpg"
        color="#000000"
        opacity={0.7}
        minHeight="100vh"
        isFixed={true}
        isCentered={true}
        transitionDuration={600}
      >
        <br />
        <LinkContainer to="https://babywise.life">
          <Button size="lg" variant="info">
            Babywise.life
          </Button>
        </LinkContainer>
        <br />
        <br />
        <Container>
          <p className="mt-5 text-white">
            Created several apps, both Shopify and Enterprise, supporting the
            massive data behind this website, including a search engine and gift
            registry.
          </p>
        </Container>
      </LazyHero>

      <LazyHero
        imageSrc="/babyearth.jpg"
        color="#001100"
        opacity={0.6}
        minHeight="100vh"
        isFixed={true}
        isCentered={true}
        transitionDuration={600}
      >
        <LinkContainer to="https://babyearth.com">
          <Button size="lg" variant="success">
            Babyearth.com
          </Button>
        </LinkContainer>
        <p className="mt-5 text-white">
          Created and maintained the entire backend infrastructure for the site,
          as well as numerous apps to aid on the front end, including several
          small React apps.
        </p>
      </LazyHero>
    </React.Fragment>
  );
};

export default Portfolio;
