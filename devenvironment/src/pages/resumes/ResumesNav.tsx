import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { resumes } from "./ResumeTab/Resumes/GetResume";

const ResumesNav = () => {
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
        {resumes.map((resume, index) => (
          <Col key={index}>
            <p>
              <a href={`/r/${resume.company}`}>{resume.company}</a>
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResumesNav;
