import React from "react";
import { Badge } from "react-bootstrap";

import Technology from "../classes/Technology";
import { LinkContainer } from "react-router-bootstrap";

interface TechnologyBadgeProps {
  technology: Technology;
  pageLink?: boolean | undefined;
}

const TechnologyBadge = (props: TechnologyBadgeProps) => {
  const getBootstrapVariant = (technologyType: string) => {
    if (technologyType === "frontend") {
      return "success";
    } else if (technologyType === "backend") {
      return "warning";
    } else if (technologyType === "data") {
      return "danger";
    } else if (technologyType === "deployment") {
      return "primary";
    } else if (technologyType === "cloud") {
      return "info";
    } else {
      return undefined;
    }
  };

  const { technology, pageLink } = props;
  if (pageLink === undefined || pageLink === false) {
    return (
      <Badge variant={getBootstrapVariant(technology.type)} pill>
        {technology.label}
      </Badge>
    );
  } else {
    return (
      <LinkContainer
        style={{ cursor: "pointer" }}
        to={`/technologies/${technology.type}/${technology.id}`}
      >
        <Badge variant={getBootstrapVariant(technology.type)} pill>
          {technology.label}
        </Badge>
      </LinkContainer>
    );
  }
};

export default TechnologyBadge;
