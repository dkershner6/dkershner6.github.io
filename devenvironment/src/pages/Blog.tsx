import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import posts from "./blog/Posts";
import technologies from "./technologies/Technologies";
import HelmetHead from "../components/Seo";
import BaseProps from "../interfaces/BaseProps";
import Post from "../classes/Post";

import TechnologySelector from "./blog/TechnologySelector";
import PostContainer from "./blog/PostContainer";

interface MatchParams {
  technologyId?: string;
}

interface BlogProps extends BaseProps<MatchParams> {
  posts: Post[];
}

const Blog = (props: BlogProps) => {
  const getTechnologies = () => {
    let returnIds = [];
    posts.forEach(post => {
      post.technologyIds.forEach(techId => {
        if (!returnIds.includes(techId)) {
          returnIds.push(techId);
        }
      });
    });
    return technologies.filter(technology => returnIds.includes(technology.id));
  };
  const writtenTechnologies = getTechnologies();
  const technologyId = props.match.params.technologyId;
  const technology = writtenTechnologies.filter(
    technology => technology.id === technologyId
  )[0];
  return (
    <Container className="mt-5">
      <HelmetHead
        title={
          technologyId !== undefined
            ? `${technology.label} | DKershner.com`
            : `Blog | DKershner.com`
        }
      />
      <Row>
        <Col>
          <h1 className="display-4">
            {technologyId !== undefined ? `${technology.label}` : `Blog`}
          </h1>
        </Col>
      </Row>
      <TechnologySelector
        technologyId={technologyId}
        technology={technology}
        writtenTechnologies={writtenTechnologies}
      />
      {technologyId === undefined
        ? posts.map((post, index) => (
            <PostContainer
              key={index}
              technologies={writtenTechnologies}
              post={post}
            />
          ))
        : posts
            .filter(post => post.technologyIds.includes(technologyId))
            .map((post, index) => (
              <PostContainer
                key={index}
                technologies={writtenTechnologies}
                post={post}
              />
            ))}
    </Container>
  );
};

export default Blog;
