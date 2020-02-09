import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import SiteWrapper from '../../components/common/SiteWrapper';

import { technologies } from '../../data/Technologies';

const TechnologiesPage = props => {
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
                            {technologies.sort(sortByAlpha).map(technology => (
                                <li key={technology.id}>
                                    <Link to={`/technologies/${technology.type}/${technology.id}/`}>{technology.label}</Link>
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

export const tagPageQuery = graphql`
    query TagsQuery {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
