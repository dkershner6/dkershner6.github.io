import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import TechnologyBadge from './TechnologyBadge';
import { getTechnologyById } from '../classes/Technology';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Row className='mt-3'>
        {posts &&
          posts.map(({ node: post }) => (
            <Col key={post.id} xs='12' lg='6' className='mt-3'>
              <Row>
                <Col xs='6'>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.title}`,
                    }}
                  />
                </Col>
                <Col xs='6'>
                  <Link to={post.fields.slug}>
                    <h4>{post.frontmatter.title}</h4>
                  </Link>
                  <p>{post.frontmatter.date}</p>
                  <p>
                    {post.frontmatter.tags && post.frontmatter.tags.length
                      ? post.frontmatter.tags.map((tag, index) => (
                          <TechnologyBadge
                            key={index}
                            technology={getTechnologyById(tag)}
                          />
                        ))
                      : ''}
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
      </Row>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const BlogRollWithQuery = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                tags
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

export default BlogRollWithQuery;
