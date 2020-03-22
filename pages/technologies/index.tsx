import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import Link from 'next/link';
import SiteWrapper from '../../src/components/common/SiteWrapper';

import { technologies } from '../../src/data/Technologies';

const TechnologiesPage = () => {
    const sortByAlpha = (a, b) => {
        if (a.label > b.label) {
            return 1;
        } else {
            return -1;
        }
    };

    return (
        <SiteWrapper>
            <Helmet title={`Technologies | DKershner.com`} />
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
                                    <Link href={`/technologies/${technology.id}`}>
                                        <a href={`/technologies/${technology.id}`}>{technology.label}</a>
                                    </Link>
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
