import React, { ReactElement } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Arrow from 'react-arrow';
import { Link as ScrollLink } from 'react-scroll';

import PortfolioDesignPrinciples from './PortfolioDesignPrinciples';
import PortfoilioDesignSection from './PortfolioDesignSection';

import PortfolioProps from '../../interfaces/PortfolioProps';

const PortfolioDesign = (props: PortfolioProps): ReactElement => {
    const { project } = props;
    return (
        <>
            <Jumbotron className="bg-primary text-light" fluid>
                <Row className="text-center">
                    <Col>
                        <h2 id="design" className="display-4">
                            Application Design
                        </h2>
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
                            <ScrollLink to={project.liveExampleService.id} smooth={true}>
                                <Button variant="info">See Live Examples in {project.liveExampleService.name}</Button>
                            </ScrollLink>
                        </Col>
                    </Row>
                )}
            </Jumbotron>
            <Container className="mt-2">
                <PortfolioDesignPrinciples />
                <PortfoilioDesignSection {...props} sectionId="data" sectionName="Data" headerBg="danger" headerText="light" />
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
                <PortfoilioDesignSection {...props} sectionId="backend" sectionName="Back-End" headerBg="warning" headerText="light" />
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
                <PortfoilioDesignSection {...props} sectionId="frontend" sectionName="Front-End" headerBg="success" headerText="light" />
            </Container>
        </>
    );
};

export default PortfolioDesign;
