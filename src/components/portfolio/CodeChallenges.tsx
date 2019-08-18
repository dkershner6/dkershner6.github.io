import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import CodeChallenge from "../../classes/CodeChallenge";

import { codeChallenges } from "../../data/projects/CodeChallenges";
import TechnologyBadge from "../../components/TechnologyBadge";

interface CodeChallengeDisplayProps {
  challenge: CodeChallenge;
  count: number;
}

const CodeChallenges = () => {
  return (
    <Container id="design" className="mt-5">
      <Row>
        {codeChallenges.map((challenge, index) => (
          <CodeChallengeDisplay
            key={index}
            challenge={challenge}
            count={codeChallenges.length}
          />
        ))}
      </Row>
    </Container>
  );
};

const CodeChallengeDisplay = (props: CodeChallengeDisplayProps) => {
  const { challenge, count } = props;
  return (
    <Col className="mt-4" xs="12" lg={count === 1 ? "12" : "6"}>
      <Card>
        <Card.Header as="h3">
          <a href={challenge.link} target="_blank" rel="noopener noreferrer">
            {challenge.name}{" "}
            <TechnologyBadge technology={challenge.technology} />
          </a>
        </Card.Header>
        <Card.Body>
          <Card.Title>Background</Card.Title>
          <Card.Text>{challenge.background}</Card.Text>
          <Card.Title>Task</Card.Title>
          <Card.Text>{challenge.task}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CodeChallenges;
