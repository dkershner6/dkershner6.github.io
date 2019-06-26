import React from "react";
import { Row, Col } from "react-bootstrap";

import InseegoCoverLetter from "./CoverLetters/InseegoCoverLetter";
import KollectiveCoverLetter from "./CoverLetters/KollectiveCoverLetter";

interface CoverLetterProps {
  company: string;
}

const CoverLetter = (props: CoverLetterProps) => {
  return (
    <Row className="mt-3">
      <Col>
        <hr />
        <GetCoverLetter {...props} />
        <p>
          I look forward to the challenge. Thank you for your consideration.
        </p>
        <h5>Sincerely,</h5>
        <h4 className="mt-2">Derek Kershner</h4>
        <hr />
      </Col>
    </Row>
  );
};

interface GetCoverLetterProps {
  company: string;
}

const GetCoverLetter = (props: GetCoverLetterProps) => {
  const { company } = props;
  if (company === "inseego") {
    return <InseegoCoverLetter />;
  } else if (company === "kollective") {
    return <KollectiveCoverLetter />;
  } else {
    return null;
  }
};

export default CoverLetter;
