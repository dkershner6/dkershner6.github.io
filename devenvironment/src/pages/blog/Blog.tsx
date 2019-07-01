import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LazyHero from "react-lazy-hero";

import posts from "./Posts";
import HelmetHead from "../../components/Seo";

const uniqueCategories = ["Azure Functions"];
/*const uniqueCategories = [
  ...new Set(
    posts
      .map(post => post.categories)
      .flat()
      .sort()
  )
];*/

const Blog = props => {
  const category = props.match.params.category;
  return (
    <Container className="mt-5">
      <HelmetHead
        title={
          category !== undefined
            ? `${category} | DKershner.com`
            : `Blog | DKershner.com`
        }
      />
      <Row>
        <Col>
          <h1 className="display-4">
            {category !== undefined ? `${category}` : `Blog`}
          </h1>
        </Col>
      </Row>
      <CategorySelector category={category} />
      {posts.map((post, index) => (
        <PostContainer key={index} post={post} />
      ))}
    </Container>
  );
};

const CategorySelector = props => {
  if (props.category !== undefined) {
    return (
      <Row>
        <Col>
          <Link to={`/blog/`}>
            <span className="badge badge-pill badge-danger">
              Remove Category Filter
            </span>
          </Link>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col>
          Category Filters:{" "}
          {uniqueCategories.map((category, index) => (
            <Category category={category} key={index} />
          ))}
        </Col>
      </Row>
    );
  }
};

const PostContainer = props => {
  return (
    <Row className="mt-2">
      <Col>
        <LinkContainer to={`/blog/${props.post.handle}`}>
          <LazyHero
            imageSrc={`/posts/images/${props.post.image}`}
            color="#FFFFFF"
            opacity={0.8}
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
      </Col>
    </Row>
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
