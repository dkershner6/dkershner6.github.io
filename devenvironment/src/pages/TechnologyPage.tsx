import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BaseProps from "../interfaces/BaseProps";
import {
  getTechnologyById,
  getProjectsForTechnology,
  getPostsForTechnology
} from "../classes/Technology";

import Error from "../Error";
import SkillDisplay from "../components/SkillDisplay";
import properCase from "../utils/ProperCase";
import TechnologyBadge from "../components/TechnologyBadge";

interface MatchParams {
  technologyType: string;
  technologyId: string;
}

interface TechnologyProps extends BaseProps<MatchParams> {}

const TechnologyPage = (props: TechnologyProps) => {
  const { technologyId } = props.match.params;
  const technology = getTechnologyById(technologyId);
  const projects = getProjectsForTechnology(technology);
  const posts = getPostsForTechnology(technology);
  if (technology !== undefined) {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="display-3">{technology.label}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TechnologyBadge technology={technology} />
          </Col>
        </Row>
        {technology.link !== undefined && (
          <Row className="mt-3">
            <Col>
              <a
                href={technology.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>{technology.label} Documentation</h4>
              </a>
            </Col>
          </Row>
        )}
        <Row className="mt-3">
          <Col>
            <Row>
              <Col>
                <strong>Technology Type:</strong>
              </Col>
              <Col>{properCase(technology.type)}</Col>
            </Row>
          </Col>
          {technology.language !== undefined && (
            <Col>
              <Row>
                <Col xs="auto">
                  <strong>Language:</strong>
                </Col>
                <Col>{technology.language}</Col>
              </Row>
            </Col>
          )}
          <Col>
            <Row>
              <Col xs="auto">
                <strong>Personal Familiarity:</strong>
              </Col>
              <Col>
                <SkillDisplay filled={technology.familiarity} />
              </Col>
            </Row>
          </Col>
        </Row>
        {projects.length > 0 && (
          <React.Fragment>
            <Row className="mt-5">
              <Col>
                <h4>Portfolio Projects that use this technology:</h4>
                <ul>
                  {projects.map((project, index) => (
                    <li key={index}>
                      <h5>
                        <a href={`/portfolio/${project.id}`}>{project.name}</a>{" "}
                        uses this technology in {project.uses} service
                        {project.uses > 1 && "s"}
                      </h5>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </React.Fragment>
        )}
        {posts.length > 0 && (
          <React.Fragment>
            <Row className="mt-5">
              <Col>
                <h4>Posts written about this technology:</h4>

                <ul>
                  {posts.map((post, index) => (
                    <li key={index}>
                      <h5>
                        <a href={`/blog/${post.handle}`}>{post.title}</a>
                      </h5>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </React.Fragment>
        )}
      </Container>
    );
  } else {
    return <Error />;
  }
};

export default TechnologyPage;
