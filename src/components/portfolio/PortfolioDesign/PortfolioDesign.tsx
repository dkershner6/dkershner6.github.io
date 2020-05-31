import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Arrow from 'react-arrow';

import PortfolioDesignPrinciples from './PortfolioDesignPrinciples';
import PortfoilioDesignSection from './PortfolioDesignSection';

import IPortfolio from '../IPortfolio';
import { PortfolioDesignHeader } from './PortfolioDesignHeader';

const PortfolioDesign = (props: IPortfolio): ReactElement => {
    const { project } = props;
    return (
        <>
            <PortfolioDesignHeader {...props} />
            <Container className="mt-2">
                <PortfolioDesignPrinciples />
                <PortfoilioDesignSection
                    {...props}
                    sectionId="data"
                    sectionName="Data"
                    headerBg="danger"
                    headerText="light"
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
                    {...props}
                    sectionId="backend"
                    sectionName="Back-End"
                    headerBg="warning"
                    headerText="light"
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
                    {...props}
                    sectionId="frontend"
                    sectionName="Front-End"
                    headerBg="success"
                    headerText="light"
                />
            </Container>
        </>
    );
};

export default PortfolioDesign;
