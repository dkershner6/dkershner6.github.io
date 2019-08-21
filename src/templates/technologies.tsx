import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

import properCase from '../utils/ProperCase';

import { technologies } from '../data/Technologies';
import TechnologyBadge from '../components/TechnologyBadge';
import SkillDisplay from '../components/SkillDisplay';

import Technology, { getProjectsForTechnology } from '../classes/Technology';

interface TagRouteProps {
  data: any;
  pageContext: any;
}

class TagRoute extends React.Component<TagRouteProps> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <h5>
          <a href={`${post.node.fields.slug}`}>{post.node.frontmatter.title}</a>
        </h5>
      </li>
    ));

    const technologyId = this.props.pageContext.techId;
    const technology = technologies.filter(
      technology => technology.id === technologyId,
    )[0];
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    let projects = getProjectsForTechnology(technology);
    return (
      <Layout siteMetadata={this.props.data}>
        <Helmet title={`${technology.label} | ${title}`} />
        <Container className='mt-5'>
          <Row>
            <Col>
              <h1 className='display-3'>{technology.label}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <TechnologyBadge technology={technology} />
            </Col>
          </Row>
          {technology.link !== undefined && (
            <Row className='mt-3'>
              <Col>
                <a
                  href={technology.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h4>{technology.label} Documentation</h4>
                </a>
              </Col>
            </Row>
          )}
          <Row className='mt-3'>
            <Col>
              <Row>
                <Col>
                  <strong>Technology Type:</strong>
                </Col>
                <Col>{properCase(technology.type)}</Col>
              </Row>
            </Col>
            {technology.language !== undefined && (
              <Col>
                <Row>
                  <Col xs='auto'>
                    <strong>Language:</strong>
                  </Col>
                  <Col>{technology.language}</Col>
                </Row>
              </Col>
            )}
            <Col>
              <Row>
                <Col xs='auto'>
                  <strong>Personal Familiarity:</strong>
                </Col>
                <Col>
                  <SkillDisplay filled={technology.familiarity} />
                </Col>
              </Row>
            </Col>
          </Row>
          {projects !== undefined && projects.length > 0 && (
            <React.Fragment>
              <Row className='mt-5'>
                <Col>
                  <h4>Portfolio Projects that use this technology:</h4>
                  <ul>
                    {projects.map((project, index) => (
                      <li key={index}>
                        <h5>
                          <a href={`/portfolio/${project.id}`}>
                            {project.name}
                          </a>{' '}
                          uses this technology in {project.uses} service
                          {project.uses > 1 && 's'}
                        </h5>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </React.Fragment>
          )}
          {postLinks.length > 0 && (
            <React.Fragment>
              <Row className='mt-5'>
                <Col>
                  <h4>Posts written about this technology:</h4>

                  <ul>{postLinks}</ul>
                </Col>
              </Row>
            </React.Fragment>
          )}
        </Container>
      </Layout>
    );
  }
}

export default TagRoute;

export const techPageQuery = graphql`
  query TechPage($techId: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$techId] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
