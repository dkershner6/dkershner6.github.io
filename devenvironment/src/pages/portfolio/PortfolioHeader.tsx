import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LazyHero from "react-lazy-hero";
import Arrow from "react-arrow";

import PortfolioProps from "../../interfaces/PortfolioProps";

const PortfolioHeader = (props: PortfolioProps) => {
  const { project, menu } = props;
  return (
    <LazyHero
      imageSrc={project.imageSrc}
      color={project.heroTint}
      opacity={0.6}
      minHeight={menu ? "400px" : "800px"}
      isFixed={true}
      isCentered={true}
      transitionDuration={600}
    >
      <h1
        className={
          menu ? "text-center text-white" : "display-4 text-center text-white"
        }
      >
        {project.name}
      </h1>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-left text-white" xl="9">
            {!menu && <h4>Project Specification</h4>}
            <ul>
              {project.specification.map((specItem, index) => (
                <li key={index}>{specItem}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row
          className={
            menu ? "justify-content-center" : "justify-content-center mt-5"
          }
        >
          <Col className="text-center">
            <PortfolioHeaderButton {...props} />
          </Col>
        </Row>
      </Container>
    </LazyHero>
  );
};

const PortfolioHeaderButton = (props: PortfolioProps) => {
  const { project, menu } = props;
  if (menu) {
    return (
      <Button
        variant={project.bootstrapVariant}
        href={`/portfolio/${project.id}`}
      >
        See Complete Application Design
      </Button>
    );
  } else {
    return (
      <Button variant={project.bootstrapVariant} href="#design">
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
    );
  }
};

export default PortfolioHeader;
