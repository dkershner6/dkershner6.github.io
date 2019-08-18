import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import Resume from "../../../classes/Resume";

import { ResumeTabProps } from "../ResumeTab";

interface ReferencesProps extends ResumeTabProps {
  resume: Resume;
}

const References = (props: ReferencesProps) => {
  const { resume } = props;
  return (
    <Row className="mt-3">
      <Col>
        <Card border="secondary">
          <Card.Header>
            <h3>References</h3>
          </Card.Header>
          <ListGroup className="list-group-flush">
            {resume.references.map((reference, index) => (
              <ListGroupItem key={index}>
                <a
                  href={reference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {reference.name}
                </a>{" "}
                - {reference.description}
              </ListGroupItem>
            ))}
            <ListGroupItem>
              {resume.references.length > 0 ? "More r" : "R"}eferences available
              upon request.
            </ListGroupItem>
          </ListGroup>
          <Card.Footer>
            Recommendations can be found on{" "}
            <a
              href="https://www.linkedin.com/in/derek-kershner-54b3392/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default References;
