import React from "react";
import { Row, Col } from "react-bootstrap";

interface ResumeHeaderProps {
  company: string;
}

const ResumeHeader = (props: ResumeHeaderProps) => {
  return (
    <Row>
      <Col>
        <h1 className="text-primary">Derek Kershner</h1>
        <h6>
          Censored online to avoid spammers | censored@dkershner.com |
          cen-sor-ed!!
        </h6>
        <p>
          Interactive version available at{" "}
          <a href={`https://dkershner.com/r/${props.company}`}>
            https://dkershner.com/r/{props.company}
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default ResumeHeader;
