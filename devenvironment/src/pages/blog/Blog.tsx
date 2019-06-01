import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LazyHero from "react-lazy-hero";

import posts from "./Posts";
import HelmetHead from "../../components/Seo";

const uniqueCategories = [
  ...new Set(
    posts
      .map(post => post.categories)
      .flat()
      .sort()
  )
];

const Blog = props => {
  if (props.match.params.category !== undefined) {
    return (
      <Container>
        <HelmetHead title={`${props.match.params.category} | DKershner.com`} />
        <div className="page-header" style={{ padding: 20 }}>
          <h1>{props.match.params.category}</h1>
        </div>

        <div id="categories" style={{ padding: 20, textAlign: "center" }}>
          <Link to={`/blog/`}>
            <span className="badge badge-pill badge-danger">
              Remove Category Filter
            </span>
          </Link>
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
        <div className="page-header" style={{ padding: 20 }}>
          <h1>Blog</h1>
        </div>
        <div id="categories" style={{ padding: 20, textAlign: "center" }}>
          <h6>Category Filters</h6>
          {uniqueCategories.map((category, index) => (
            <Category category={category} key={index} />
          ))}
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
          <Category category={category} key={index} />
        ))}
      </LazyHero>
    </LinkContainer>
  );
};

const Category = props => {
  return (
    <Link to={`/blog/category/${props.category}`}>
      <span className="badge badge-pill badge-light">
        {props.category.toLowerCase()}
      </span>
    </Link>
  );
};

export default Blog;
