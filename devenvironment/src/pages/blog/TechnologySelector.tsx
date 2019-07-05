import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import TechnologyBadge from "../../components/TechnologyBadge";
import Technology from "../../classes/Technology";
import { LinkContainer } from "react-router-bootstrap";

interface TechnologySelectorProps {
  technologyId: string;
  technology: Technology;
  writtenTechnologies: Technology[];
}

const TechnologySelector = (props: TechnologySelectorProps) => {
  if (props.technologyId !== undefined) {
    return (
      <Row>
        <Col>
          <LinkContainer to={`/blog/`}>
            <Button variant="danger">
              Remove: <TechnologyBadge technology={props.technology} />
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col>
          Filter:{" "}
          {props.writtenTechnologies.map((technology, index) => (
            <Link key={index} to={`/blog/technology/${technology.id}`}>
              <TechnologyBadge technology={technology} key={index} />
            </Link>
          ))}
        </Col>
      </Row>
    );
  }
};

export default TechnologySelector;
