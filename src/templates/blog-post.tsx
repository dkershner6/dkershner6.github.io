import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LazyHero from 'react-lazy-hero';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import TechnologyBadge from '../components/TechnologyBadge';

import { getTechnologyById } from '../classes/Technology';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <React.Fragment>
      <LazyHero
        imageSrc={featuredimage.publicURL}
        color='#FFFFFF'
        opacity={0.8}
        minHeight='25vh'
        parallaxOffset={0.5}
        isCentered={true}
        transitionDuration={600}
      >
        <Row>
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            {tags && tags.length
              ? tags.map(tag => (
                  <Link key={tag} to={`/technologies/${tag}/`}>
                    <TechnologyBadge technology={getTechnologyById(tag)} />
                  </Link>
                ))
              : null}
          </Col>
        </Row>
      </LazyHero>
      <Container className='mt-5'>
        {helmet || ''}

        <Row className='mt-5'>
          <Col>
            <PostContent content={content} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Blog'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
    }
  }
`;
