import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import SkillDisplay from "../../../components/SkillDisplay";

const Skills = props => {
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <Card.Header>
            <h3>Skills & Framework Familiarity</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <p className="text-muted">
                  Any skill that directly matches a job requirement will be{" "}
                  <strong>bolded</strong>.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card border="primary">
                  <Card.Header>Front-End</Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem action href="https://reactjs.org/">
                      <Row>
                        <Col>React / JS:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      action
                      href="https://www.typescriptlang.org/"
                    >
                      <Row>
                        <Col>
                          <strong>TypeScript / JS</strong>:
                        </Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      action
                      href="https://shopify.github.io/liquid/"
                    >
                      <Row>
                        <Col>Shopify / Liquid:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={4} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
              <Col>
                <Card border="success">
                  <Card.Header>Back-End</Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      action
                      href="https://dotnet.microsoft.com/apps/aspnet"
                    >
                      <Row>
                        <Col>ASP.Net Core/C#:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem action href="https://nodejs.org/en/">
                      <Row>
                        <Col>Node / JS:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={4} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem action href="https://www.python.org/">
                      <Row>
                        <Col>Flask / Python:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={3} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
              <Col>
                <Card border="info">
                  <Card.Header>Clouds</Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      action
                      href="https://azure.microsoft.com/en-us/"
                    >
                      <Row>
                        <Col>Azure:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem action href="https://cloud.google.com/">
                      <Row>
                        <Col>
                          <strong>Google</strong>:
                        </Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={3} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem action href="https://aws.amazon.com/">
                      <Row>
                        <Col>
                          <strong>AWS</strong>:
                        </Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={2} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
              <Col>
                <Card border="secondary">
                  <Card.Header>
                    <strong>Deployment</strong>/DevOps
                  </Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      action
                      href="https://azure.microsoft.com/en-us/services/devops/"
                    >
                      <Row>
                        <Col>Azure DevOps / VSTS:</Col>
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem action href="https://kubernetes.io/">
                      <Row>
                        <Col>Kubernetes / Docker:</Col>
                        <Col className="align-self-center">
                          <SkillDisplay filled={4} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem action href="https://aws.amazon.com/">
                      <Row>
                        <Col>AWS:</Col>
                        <Col className="align-self-center">
                          <SkillDisplay filled={2} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Card>
                  <Card.Header>Other Skills</Card.Header>
                  <Card.Body>
                    <Row className="mt-1">
                      <Col className="text-center">
                        Application Design / Microservices
                      </Col>
                      <Col className="text-center">Serverless Functions</Col>
                      <Col className="text-center">
                        <strong>RESTful APIs - Build / Consume</strong>
                      </Col>
                      <Col className="text-center">
                        <strong>Project Planning & Management / Agile</strong>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col className="text-center">SQL / RDBMS</Col>
                      <Col className="text-center">NoSQL / JSON</Col>
                      <Col className="text-center">
                        Continuous Integration / Continuous Deployment
                      </Col>
                      <Col className="text-center">
                        Search Engine Optimization
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col className="text-center">
                        Data Analysis / Big Data
                      </Col>
                      <Col className="text-center">
                        <strong>User Interface Design</strong>
                      </Col>
                      <Col className="text-center">
                        <strong>Git / Version Control</strong>
                      </Col>
                      <Col className="text-center">
                        <strong>Server Administration</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Skills;
