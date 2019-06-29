import React from "react";
import HelmetHead from "../components/Seo";

import BaseProps from "../interfaces/BaseProps";

import PortfolioHeader from "./portfolio/PortfolioHeader";
import PortfolioDesign from "./portfolio/PortfolioDesign";
import getProject from "./portfolio/Projects";

interface MatchParams {
  project: string;
}

interface PortfolioProps extends BaseProps<MatchParams> {}

const Portfolio = (props: PortfolioProps) => {
  const project = getProject(
    props.match.params.project || "enterpriseMarketplace"
  );
  return (
    <React.Fragment>
      <HelmetHead title={`Portfolio - ${project.name} | DKershner.com`} />
      <PortfolioHeader project={project} menu={false} />
      <PortfolioDesign project={project} menu={false} />
    </React.Fragment>
  );
};

export default Portfolio;
