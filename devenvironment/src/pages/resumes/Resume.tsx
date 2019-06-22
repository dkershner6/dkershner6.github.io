import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import HelmetHead from "../../components/Seo";

import BaseProps from "../../interface/BaseProps";
import CoverLetterTab from "./CoverLetterTab";
import ResumeTab from "./ResumeTab";

interface MatchParams {
  company: string;
}

const Resume = (props: BaseProps<MatchParams>) => {
  const { company } = props.match.params;
  return (
    <Container className="mt-5">
      <HelmetHead title={`Resume for ${company} | DKershner.com`} />
      <Tabs defaultActiveKey="cover" id="resume-tabs">
        <Tab eventKey="cover" title="Cover Letter">
          <CoverLetterTab company={company} />
        </Tab>
        <Tab eventKey="resume" title="Resume">
          <ResumeTab company={company} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Resume;
