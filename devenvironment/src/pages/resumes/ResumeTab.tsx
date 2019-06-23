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
import makeRange from "../../utils/MakeRange";

const urlParams = new URLSearchParams(window.location.search);
const format = urlParams.get("format");

interface ResumeTabProps {
  company: string;
  noHeader?: boolean;
}

const spaces = makeRange(0, 11);

const ResumeTab = (props: ResumeTabProps) => {
  return (
    <Container className="mt-5">
      <ResumeHeader {...props} />
      <Objective {...props} />
      <Skills {...props} />
      {format === "print" && spaces.map((space, index) => <br key={index} />)}
      <Experience {...props} />
      <Education {...props} />
      <References {...props} />
    </Container>
  );
};

export default ResumeTab;
