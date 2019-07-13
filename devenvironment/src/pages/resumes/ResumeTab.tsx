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

import getResume from "./ResumeTab/Resumes/GetResume";
import Resume from "../../classes/Resume";

const urlParams = new URLSearchParams(window.location.search);
const format = urlParams.get("format");

export interface ResumeTabProps {
  company: string;
  noHeader?: boolean;
}

const ResumeTab = (props: ResumeTabProps) => {
  const resume: Resume = getResume(props.company);

  if (resume === undefined) {
    return (
      <Container className="mt-5">
        <ResumeHeader {...props} />
        <p>Loading...</p>
        <Experience {...props} />
        <Education {...props} />
        <p>Loading...</p>>
      </Container>
    );
  } else {
    return (
      <Container className="mt-5">
        <ResumeHeader {...props} />
        <Objective {...props} resume={resume} />
        <Skills {...props} resume={resume} format={format} />
        {format === "print" &&
          resume.spaces.map((space, index) => <br key={index} />)}
        <Experience {...props} />
        <Education {...props} />
        <References {...props} resume={resume} />
      </Container>
    );
  }
};

export default ResumeTab;
