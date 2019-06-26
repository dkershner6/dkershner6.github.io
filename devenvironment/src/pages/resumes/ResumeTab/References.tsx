import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const References = props => {
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
                <a href={reference.link} target="_blank">
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
        </Card>
      </Col>
    </Row>
  );
};

export default References;
