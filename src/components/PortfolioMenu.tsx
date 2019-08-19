import React from "react";
import { Jumbotron } from "react-bootstrap";

import PortfolioHeader from "./portfolio/PortfolioHeader";
import { projects } from "../data/Projects";

const PortfolioMenu = (props): JSX.Element => {
  return (
    <React.Fragment>
      <Jumbotron id="portfolio" fluid className="bg-primary text-white">
        <h3 className="display-4 text-center">
          <a className="text-light" href="/portfolio">
            Portfolio
          </a>
        </h3>
      </Jumbotron>

      {projects.map(
        (project, index): JSX.Element => (
          <PortfolioHeader key={index} project={project} menu={true} />
        )
      )}
    </React.Fragment>
  );
};

export default PortfolioMenu;
