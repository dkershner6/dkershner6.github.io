import React, { ReactElement } from 'react';

import Arrow from 'react-arrow';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

import CodingStats from '../../../lib/common/CodingStats';

import HeroStats from './HeroStats';

const HeroContainer = styled.div`
    background-color: #391408;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='129' height='129' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23301107' %3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='1'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
    text-align: center;
    padding: 7rem 3rem;
`;

export interface HeroProps {
    image: string;
    heading: string;
    subheading: string;
    codingStats: CodingStats;
}

const Hero = (props: HeroProps): ReactElement => {
    const { heading, subheading, codingStats } = props;

    const renderHeading = (): ReactElement => (
        <Row>
            <Col>
                <h1>
                    <strong>
                        <span className="display-4 text-primary">{'>'}</span>
                        <span
                            id="heading"
                            data-testid="heading"
                            className="display-4 text-white"
                        >
                            {heading}
                        </span>
                        <span className="display-4 text-primary">{'<'}</span>
                    </strong>
                </h1>
            </Col>
        </Row>
    );

    const renderSubheading = (): ReactElement => (
        <Row>
            <Col>
                <h4 data-testid="subheading" className="text-white">
                    {subheading}
                </h4>
            </Col>
        </Row>
    );

    const renderArrowButton = (): ReactElement => (
        <Row className="mt-5">
            <Col>
                <a href="#projects">
                    <Button variant="primary">
                        <Arrow
                            direction="down"
                            shaftWidth={25}
                            shaftLength={25}
                            headWidth={50}
                            headLength={25}
                            fill="white"
                            stroke="white"
                            strokeWidth={1}
                        />
                    </Button>
                </a>
            </Col>
        </Row>
    );

    return (
        <HeroContainer>
            <Container>
                {renderHeading()}
                {renderSubheading()}
                <HeroStats codingStats={codingStats} />
                {renderArrowButton()}
            </Container>
        </HeroContainer>
    );
};

export default Hero;
