import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Resume from "../../../classes/Resume";
import { ResumeTabProps } from "../ResumeTab";

interface ObjectiveProps extends ResumeTabProps {
  resume: Resume;
}

const Objective = (props: ObjectiveProps) => {
  return (
    <Row className="mt-3">
      <Col>
        <Card border="secondary">
          <Card.Header>
            <h3>Objective</h3>
          </Card.Header>
          <Card.Body>
            <p>{props.resume.objective}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Objective;
