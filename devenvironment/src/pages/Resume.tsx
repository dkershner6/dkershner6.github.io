import React from "react";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  ButtonGroup,
  Button
} from "react-bootstrap";
import HelmetHead from "../components/Seo";

import BaseProps from "../interfaces/BaseProps";
import CoverLetterTab from "./resumes/CoverLetterTab";
import ResumeTab from "./resumes/ResumeTab";
import makeRange from "../utils/MakeRange";
import properCase from "../utils/ProperCase";

const urlParams = new URLSearchParams(window.location.search);
const format = urlParams.get("format");

interface MatchParams {
  company: string;
}

export default class Resume extends React.Component<BaseProps<MatchParams>> {
  state = {
    activeTab: "cover"
  };

  render() {
    const { company } = this.props.match.params;

    if (format === "print") {
      return (
        <Container className="mt-5">
          <TabChooser company={company} activeTab={"resume"} />
        </Container>
      );
    } else if (format === "printCover") {
      return (
        <Container className="mt-5">
          <TabChooser company={company} activeTab={"cover"} />
        </Container>
      );
    } else {
      return (
        <Container className="mt-5">
          <HelmetHead
            title={`Resume for ${properCase(company)} | DKershner.com`}
          />
          <Row className="justify-content-center">
            <Col xs="auto">
              <ButtonGroup>
                <Button
                  variant={
                    this.state.activeTab === "cover" ? "primary" : "secondary"
                  }
                  onClick={() => this.setState({ activeTab: "cover" })}
                >
                  Cover Letter
                </Button>
                <Button
                  variant={
                    this.state.activeTab === "resume" ? "primary" : "secondary"
                  }
                  onClick={() => this.setState({ activeTab: "resume" })}
                >
                  Resume
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <TabChooser company={company} activeTab={this.state.activeTab} />
        </Container>
      );
    }
  }
}

const TabChooser = props => {
  if (props.activeTab === "cover") {
    return <CoverLetterTab company={props.company} />;
  } else {
    return <ResumeTab company={props.company} />;
  }
};
