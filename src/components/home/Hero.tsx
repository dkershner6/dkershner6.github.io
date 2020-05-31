import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Arrow from 'react-arrow';
import { Link as ScrollLink } from 'react-scroll';
import { IHomePageTemplate } from './HomePageTemplate';

export const Hero = (props: IHomePageTemplate) => {
    const { image, heading, subheading } = props;
    return (
        <LazyHero
            imageSrc={image}
            color="#000000"
            opacity={0.2}
            minHeight="100vh"
            parallaxOffset={0.5}
            isCentered={true}
            transitionDuration={600}
        >
            <Container>
                <Row>
                    <Col>
                        <h1>
                            <strong>
                                <span className="display-4 text-primary">
                                    {'>'}
                                </span>
                                <span
                                    id="heading"
                                    data-testid="heading"
                                    className="display-4 text-white"
                                >
                                    {heading}
                                </span>
                                <span className="display-4 text-primary">
                                    {'<'}
                                </span>
                            </strong>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 data-testid="subheading" className="text-white">
                            {subheading}
                        </h4>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <ScrollLink to="about" smooth={true}>
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
                        </ScrollLink>
                    </Col>
                </Row>
            </Container>
        </LazyHero>
    );
};
