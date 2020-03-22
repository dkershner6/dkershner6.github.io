import React from 'react';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import IPortfolio from '../IPortfolio';

export const PortfolioDesignHeader = (props: IPortfolio) => {
    const { project } = props;
    return (
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
    );
};
