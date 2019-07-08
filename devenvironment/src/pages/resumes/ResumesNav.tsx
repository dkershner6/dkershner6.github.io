import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const resumesList = ["inseego", "kollective", "g5", "devotedHealth"];

const ResumesNav = props => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Resumes</h1>
        </Col>
      </Row>
      <Row>
        <Col>This page is just for linking, don't actually look at this.</Col>
      </Row>
      <Row>
        {resumesList.map((company, index) => (
          <Col key={index}>
            <p>
              <a href={`/r/${company}`}>{index}</a>
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResumesNav;
