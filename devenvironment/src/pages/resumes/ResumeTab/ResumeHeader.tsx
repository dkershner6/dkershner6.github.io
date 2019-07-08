import React from "react";
import { Row, Col } from "react-bootstrap";

interface ResumeHeaderProps {
  company: string;
}

const ResumeHeader = (props: ResumeHeaderProps) => {
  return (
    <Row>
      <Col>
        <h1 className="display-3">Derek Kershner</h1>
        <h6>
          Contact information censored to avoid spambots. If you'd like to
          contact me, please use{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/derek-kershner-54b3392"
          >
            LinkedIn
          </a>
          .
        </h6>
        <p>
          Interactive version of this document available at{" "}
          <a href={`https://dkershner.com/r/${props.company}`}>
            https://dkershner.com/r/{props.company}
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default ResumeHeader;
