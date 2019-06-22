import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Objective = props => {
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <Card.Header>
            <h3>Objective</h3>
          </Card.Header>
          <Card.Body>
            <p>
              Experienced Full-Stack Software Developer, DevOps Practitioner,
              and Cloud Architect with an unending thirst for learning seeking
              new challenges and experiences to broaden his depth of knowledge.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Objective;
