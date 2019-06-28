import React from "react";
import HelmetHead from "../components/Seo";

import BaseProps from "../interfaces/BaseProps";

import PortfolioHeader from "./portfolio/PortfolioHeader";
import PortfolioDesign from "./portfolio/PortfolioDesign";
import projects from "./portfolio/Projects";

interface MatchParams {
  project: string;
}

interface PortfolioProps extends BaseProps<MatchParams> {}

const Portfolio = (props: PortfolioProps) => {
  const getProject = projectId => {
    const projArray = projects.filter(p => p.id === projectId);
    if (projArray !== undefined && projArray.length > 0) {
      return projArray[0];
    } else {
      return undefined;
    }
  };
  const project = getProject(
    props.match.params.project || "enterpriseMarketplace"
  );
  return (
    <React.Fragment>
      <HelmetHead title={`Portfolio - ${project.name} | DKershner.com`} />
      <PortfolioHeader project={project} />
      <PortfolioDesign project={project} />
    </React.Fragment>
  );
};

export default Portfolio;
