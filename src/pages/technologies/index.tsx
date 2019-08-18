import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

import { technologies } from '../../data/technologies';

const TechnologiesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const sortByAlpha = (a, b) => {
    if (a.label > b.label) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <Layout>
      <Helmet title={`Technologies | ${title}`} />
      <Container className='mt-5'>
        <Row className='mt-3'>
          <Col>
            <h1>Technologies</h1>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <ul>
              {technologies.sort(sortByAlpha).map(technology => (
                <li key={technology.id}>
                  <Link
                    to={`/technologies/${technology.type}/${technology.id}/`}
                  >
                    {technology.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TechnologiesPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
