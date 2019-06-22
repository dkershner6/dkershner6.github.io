import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

import ResumeHeader from "./ResumeTab/ResumeHeader";
import Objective from "./ResumeTab/Objective";
import Skills from "./ResumeTab/Skills";
import Experience from "./ResumeTab/Experience";
import Education from "./ResumeTab/Education";
import References from "./ResumeTab/References";

interface ResumeTabProps {
  company: string;
}

const ResumeTab = (props: ResumeTabProps) => {
  return (
    <Container className="mt-5">
      <ResumeHeader {...props} />
      <Objective {...props} />
      <Skills {...props} />
      <Experience {...props} />
      <Education {...props} />
      <References {...props} />
    </Container>
  );
};

export default ResumeTab;
