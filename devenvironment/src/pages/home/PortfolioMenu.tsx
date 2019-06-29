import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PortfolioHeader from "../portfolio/PortfolioHeader";
import { projects } from "../portfolio/Projects";

const PortfolioMenu = props => {
  return (
    <React.Fragment>
      <Row className="mt-3 text-center">
        <Col>
          <h3 className="display-4 text-center">
            <a href="/portfolio">Portfolio</a>
          </h3>
        </Col>
      </Row>
      {projects.map((project, index) => (
        <PortfolioHeader key={index} project={project} menu={true} />
      ))}
    </React.Fragment>
  );
};

export default PortfolioMenu;
