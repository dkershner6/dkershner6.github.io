import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import BlogPostTag from './BlogPostTag';

const BlogRollPost = props => {
  const { post } = props;
  return (
    <Col key={post.id} xs='12' lg='6' className='mt-3'>
      <Row>
        <Col xs='6'>
          <Link to={post.fields.slug}>
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.title}`,
              }}
            />
          </Link>
        </Col>
        <Col xs='6'>
          <Link to={post.fields.slug}>
            <h5>{post.frontmatter.title}</h5>
          </Link>
          <p>{post.frontmatter.date}</p>
          <p className='small'>{post.frontmatter.description}</p>
          <p>
            {post.frontmatter.tags && post.frontmatter.tags.length
              ? post.frontmatter.tags.map((tag, index) => (
                  <BlogPostTag key={index} tag={tag} />
                ))
              : ''}
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default BlogRollPost;
