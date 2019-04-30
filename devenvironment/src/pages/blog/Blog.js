import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import posts from './Posts';
import HelmetHead from '../../components/Seo';

const Blog = props => {
  if (props.match.params.category !== undefined) {
    return (
      <Container>
        <HelmetHead title={`${props.match.params.category} | DKershner.com`} />
        <div className='page-header' style={{ padding: 40 }}>
          <h1>{props.match.params.category}</h1>
        </div>
        {posts
          .filter(post => post.categories.includes(props.match.params.category))
          .map((post, index) => (
            <PostContainer key={index} post={post} />
          ))}
      </Container>
    );
  } else {
    return (
      <Container>
        <HelmetHead title='Blog | DKershner.com' />
        <div className='page-header' style={{ padding: 40 }}>
          <h1>Blog</h1>
        </div>
        {posts.map((post, index) => (
          <PostContainer key={index} post={post} />
        ))}
      </Container>
    );
  }
};

const PostContainer = props => {
  return (
    <LinkContainer to={`/blog/${props.post.handle}`}>
      <Jumbotron>
        <h2>
          <Link to={`/blog/${props.post.handle}`}>{props.post.title}</Link>
        </h2>
        <h5>{props.post.subtitle}</h5>
        <h6>
          {props.post.date}{' '}
          {props.post.categories.map((category, index) => (
            <Link to={`/blog/category/${category}`}>
              <span class='badge badge-pill badge-info' key={index}>
                {category.toLowerCase()}
              </span>
            </Link>
          ))}
        </h6>
        <img
          src={`/posts/images/${props.post.image}`}
          width='100%'
          alt={props.post.title}
        />
      </Jumbotron>
    </LinkContainer>
  );
};

export default Blog;
