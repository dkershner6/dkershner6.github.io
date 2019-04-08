import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import posts from './Posts';
import HelmetHead from '../../components/Seo';

const Blog = () => {
  return (
    <Container>
      <HelmetHead title='Blog | DKershner.com' />
      <Row>
        <div className='page-header' style={{ padding: 40 }}>
          <h1>Blog Posts</h1>
        </div>
      </Row>
      {posts.map((post, index) => (
        <PostContainer key={index} post={post} />
      ))}
    </Container>
  );
};

const PostContainer = props => {
  return (
    <LinkContainer to={`/blog/${props.post.handle}`}>
      <Jumbotron>
        <h2>
          <Link to={`/blog/${props.post.handle}`}>{props.post.title}</Link>
        </h2>
        <h5>{props.post.subtitle}</h5>
        <h6>{props.post.date}</h6>
      </Jumbotron>
    </LinkContainer>
  );
};

export default Blog;
