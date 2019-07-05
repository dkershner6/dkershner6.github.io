import React from "react";
import { Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import LazyHero from "react-lazy-hero";

import Post from "../../classes/Post";
import TechnologyBadge from "../../components/TechnologyBadge";
import Technology from "../../classes/Technology";

interface PostContainerProps {
  technologies: Technology[];
  post: Post;
}

const PostContainer = (props: PostContainerProps) => {
  const postTechnologies = props.technologies.filter(technology =>
    props.post.technologyIds.includes(technology.id)
  );

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
            {postTechnologies.map((technology, index) => (
              <TechnologyBadge technology={technology} key={index} />
            ))}
          </LazyHero>
        </LinkContainer>
      </Col>
    </Row>
  );
};

export default PostContainer;
