import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const References = props => {
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <Card.Header>
            <h3>References</h3>
          </Card.Header>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <a
                href="https://www.linkedin.com/in/delraydavis/"
                target="_blank"
              >
                DelRay Davis
              </a>{" "}
              - DMS Engineer at Inseego
            </ListGroupItem>
            <ListGroupItem>
              More references available upon request.
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default References;
