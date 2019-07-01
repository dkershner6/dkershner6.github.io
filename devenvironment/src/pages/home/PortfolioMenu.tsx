import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

import PortfolioHeader from "../portfolio/PortfolioHeader";
import { projects } from "../portfolio/Projects";

const PortfolioMenu = props => {
  return (
    <React.Fragment>
      <Jumbotron fluid className="bg-primary text-white">
        <h3 className="display-4 text-center">
          <a className="text-light" href="/portfolio">
            Portfolio
          </a>
        </h3>
      </Jumbotron>

      {projects.map((project, index) => (
        <PortfolioHeader key={index} project={project} menu={true} />
      ))}
    </React.Fragment>
  );
};

export default PortfolioMenu;
