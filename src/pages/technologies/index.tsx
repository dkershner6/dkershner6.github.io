import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SiteWrapper from '../../components/common/SiteWrapper';

import { technologies } from '../../data/Technologies';

const TechnologiesPage = () => {
    const sortByAlpha = (a, b) => {
        if (a.label > b.label) {
            return 1;
        } else {
            return -1;
        }
    };

    return (
        <SiteWrapper title="Technologies">
            <Container className="mt-5">
                <Row className="mt-3">
                    <Col>
                        <h1>Technologies</h1>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <ul>
                            {technologies.sort(sortByAlpha).map((technology) => (
                                <li key={technology.id}>
                                    <a href={`/technologies/${technology.id}`}>{technology.label}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </SiteWrapper>
    );
};

export default TechnologiesPage;
