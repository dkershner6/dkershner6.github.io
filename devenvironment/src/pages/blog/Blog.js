import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LazyHero from "react-lazy-hero";

import posts from "./Posts";
import HelmetHead from "../../components/Seo";

const Blog = props => {
  if (props.match.params.category !== undefined) {
    return (
      <Container>
        <HelmetHead title={`${props.match.params.category} | DKershner.com`} />
        <div className="page-header" style={{ padding: 40 }}>
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
        <HelmetHead title="Blog | DKershner.com" />
        <div className="page-header" style={{ padding: 40 }}>
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
      <LazyHero
        imageSrc={`/posts/images/${props.post.image}`}
        color="#000000"
        opacity={0.6}
        minHeight="50vh"
        isCentered={true}
        transitionDuration={600}
      >
        <h2>
          <Link to={`/blog/${props.post.handle}`}>{props.post.title}</Link>
        </h2>
        <h5>{props.post.subtitle}</h5>
        <h6>{props.post.date}</h6>
        {props.post.categories.map((category, index) => (
          <Link to={`/blog/category/${category}`}>
            <span class="badge badge-pill badge-info" key={index}>
              {category.toLowerCase()}
            </span>
          </Link>
        ))}
      </LazyHero>
    </LinkContainer>
  );
};

export default Blog;
