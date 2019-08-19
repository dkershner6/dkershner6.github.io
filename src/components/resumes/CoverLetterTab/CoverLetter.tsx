import React from "react";
import { Row, Col } from "react-bootstrap";

import InseegoCoverLetter from "./CoverLetters/InseegoCoverLetter";
import KollectiveCoverLetter from "./CoverLetters/KollectiveCoverLetter";
import G5CoverLetter from "./CoverLetters/G5CoverLetter";
import DevotedHealthCoverLetter from "./CoverLetters/DevotedHealthCoverLetter";
import FiveTalentCoverLetter from "./CoverLetters/FiveTalentCoverLetter";
import CBTNuggetsCoverLetter from "./CoverLetters/CBTNuggetsCoverLetter";
import TitanCoverLetter from "./CoverLetters/TitanCoverLetter";
import PollyCoverLetter from "./CoverLetters/PollyCoverLetter";
import SyrinxCoverLetter from "./CoverLetters/SyrinxCoverLetter";

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

export interface GetCoverLetterProps {
  company: string;
}

const GetCoverLetter = (props: GetCoverLetterProps) => {
  const { company } = props;
  if (company === "inseego") {
    return <InseegoCoverLetter />;
  } else if (company === "kollective") {
    return <KollectiveCoverLetter />;
  } else if (company === "g5") {
    return <G5CoverLetter />;
  } else if (company === "devotedHealth") {
    return <DevotedHealthCoverLetter />;
  } else if (company === "fiveTalent") {
    return <FiveTalentCoverLetter />;
  } else if (company === "cbtNuggets") {
    return <CBTNuggetsCoverLetter />;
  } else if (company === "titan") {
    return <TitanCoverLetter />;
  } else if (company === "polly") {
    return <PollyCoverLetter />;
  } else if (company === "syrinx") {
    return <SyrinxCoverLetter />;
  } else {
    return null;
  }
};

export default CoverLetter;
