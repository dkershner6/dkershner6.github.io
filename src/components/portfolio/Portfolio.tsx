import React from "react";
import HelmetHead from "../Seo";

import PortfolioHeader from "./PortfolioHeader";
import PortfolioDesign from "./PortfolioDesign";
import CodeChallenges from "./CodeChallenges";
import getProject from "../../data/Projects";

interface PortfolioProps {
  projectName: string;
}

const Portfolio = (props: PortfolioProps) => {
  const project = getProject(props.projectName || "enterpriseMarketplace");
  return (
    <>
      <HelmetHead title={`Portfolio - ${project.name} | DKershner.com`} />
      <PortfolioHeader project={project} menu={false} />
      {project.id === "codeChallenges" ? (
        <CodeChallenges />
      ) : (
        <PortfolioDesign project={project} menu={false} />
      )}
    </>
  );
};

export default Portfolio;
