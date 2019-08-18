import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { ResumeTabProps } from "../ResumeTab";

const Education = (props: ResumeTabProps) => {
  return (
    <Row className="mt-3">
      <Col>
        <Card border="secondary">
          <Card.Header>
            <h3>Education</h3>
          </Card.Header>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Row>
                <Col xs="auto">
                  <p className="text-success">2002-2005</p>
                </Col>
                <Col>
                  <p>
                    BS - University of Oregon Lundquist College of Business -
                    Concentration in Finance
                  </p>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Education;
