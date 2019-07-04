import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import Arrow from "react-arrow";
import { Link as ScrollLink } from "react-scroll";

import PortfolioDesignPrinciples from "./PortfolioDesignPrinciples";
import PortfoilioDesignSection from "./PortfolioDesignSection";

import PortfolioProps from "../../interfaces/PortfolioProps";

interface PortfolioDesignState {
  open: any;
}

class PortfolioDesign extends React.Component<
  PortfolioProps,
  PortfolioDesignState
> {
  state = {
    open: {
      data: true,
      backend: true,
      frontend: true
    }
  };

  getOpen = (keyName: string): boolean => {
    const openValue = this.state.open[keyName];
    if (openValue === undefined || openValue === null) {
      return false;
    } else {
      return openValue;
    }
  };

  toggleOpen = (keyName: string): void => {
    let tempOpen = this.state.open;
    const openValue = this.getOpen(keyName);
    tempOpen[keyName] = !openValue;
    this.setState({ open: tempOpen });
  };

  render(): JSX.Element {
    const { project } = this.props;
    return (
      <Container className="mt-5">
        <PortfolioDesignPrinciples />

        <Jumbotron className="mt-4 bg-info text-light">
          <Row className="text-center">
            <Col>
              <h2 className="display-4">Application Design</h2>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p>Click headers to expand/collapse</p>
            </Col>
          </Row>
          {project.liveExampleService !== undefined && (
            <Row className="text-center">
              <Col>
                <ScrollLink
                  to={project.liveExampleService.id}
                  smooth={true}
                  onClick={() => this.toggleOpen(project.liveExampleService.id)}
                >
                  <Button>
                    See Live Examples in {project.liveExampleService.name}
                  </Button>
                </ScrollLink>
              </Col>
            </Row>
          )}
        </Jumbotron>
        <PortfoilioDesignSection
          {...this.props}
          sectionId="data"
          sectionName="Data"
          headerBg="danger"
          headerText="light"
          getOpen={this.getOpen}
          toggleOpen={this.toggleOpen}
        />
        <Row className="mt-3 text-center">
          <Col>
            <Arrow
              direction="down"
              shaftWidth={25}
              shaftLength={25}
              headWidth={50}
              headLength={25}
              fill={project.heroTint}
              stroke={project.heroTint}
              strokeWidth={1}
            />
          </Col>
        </Row>
        <PortfoilioDesignSection
          {...this.props}
          sectionId="backend"
          sectionName="Back-End"
          headerBg="warning"
          headerText="light"
          getOpen={this.getOpen}
          toggleOpen={this.toggleOpen}
        />
        <Row className="mt-3 text-center">
          <Col>
            <Arrow
              direction="down"
              shaftWidth={25}
              shaftLength={25}
              headWidth={50}
              headLength={25}
              fill={project.heroTint}
              stroke={project.heroTint}
              strokeWidth={1}
            />
          </Col>
        </Row>
        <PortfoilioDesignSection
          {...this.props}
          sectionId="frontend"
          sectionName="Front-End"
          headerBg="success"
          headerText="light"
          getOpen={this.getOpen}
          toggleOpen={this.toggleOpen}
        />
      </Container>
    );
  }
}

export default PortfolioDesign;
