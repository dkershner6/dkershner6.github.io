import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import SkillDisplay from "../../../components/SkillDisplay";

const Skills = props => {
  return (
    <Row className="mt-3">
      <Col>
        <Card border="secondary">
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
              <Col className="mt-2" xs="12" md="6">
                <Card border="secondary">
                  <Card.Header>Front-End</Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      action
                      href="https://reactjs.org/"
                      target="_blank"
                    >
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
                      target="_blank"
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
                      target="_blank"
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
              <Col className="mt-2" xs="12" md="6">
                <Card border="secondary">
                  <Card.Header>Back-End</Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      action
                      href="https://dotnet.microsoft.com/apps/aspnet"
                      target="_blank"
                    >
                      <Row>
                        <Col>ASP.Net Core / C#:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      action
                      href="https://nodejs.org/en/"
                      target="_blank"
                    >
                      <Row>
                        <Col>Node / JS:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={4} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      action
                      href="https://www.python.org/"
                      target="_blank"
                    >
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
              <Col className="mt-2" xs="12" md="6">
                <Card border="secondary">
                  <Card.Header>Clouds</Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      action
                      href="https://azure.microsoft.com/en-us/"
                      target="_blank"
                    >
                      <Row>
                        <Col>Azure:</Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      action
                      href="https://cloud.google.com/"
                      target="_blank"
                    >
                      <Row>
                        <Col>
                          <strong>Google</strong>:
                        </Col>{" "}
                        <Col className="align-self-center">
                          <SkillDisplay filled={3} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      action
                      href="https://aws.amazon.com/"
                      target="_blank"
                    >
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
              <Col className="mt-2" xs="12" md="6">
                <Card border="secondary">
                  <Card.Header>
                    <strong>Deployment</strong>/DevOps
                  </Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem
                      action
                      href="https://azure.microsoft.com/en-us/services/devops/"
                      target="_blank"
                    >
                      <Row>
                        <Col>Azure DevOps / VSTS:</Col>
                        <Col className="align-self-center">
                          <SkillDisplay filled={5} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem
                      action
                      href="https://kubernetes.io/"
                      target="_blank"
                    >
                      <Row>
                        <Col>Kubernetes / Docker:</Col>
                        <Col className="align-self-center">
                          <SkillDisplay filled={4} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Card border="secondary">
                  <Card.Header>Other Skills</Card.Header>
                  <Card.Body>
                    <Row className="mt-1">
                      <Col className="mt-1 text-center" md="6" lg="3">
                        Application Design / Microservices
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        Serverless Functions
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        <strong>RESTful APIs - Build / Consume</strong>
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        <strong>Project Planning & Management / Agile</strong>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col className="mt-1 text-center" md="6" lg="3">
                        Entity Framework / SQL / RDBMS
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        NoSQL / JSON
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        Continuous Integration / Continuous Deployment
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        Search Engine Optimization
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col className="mt-1 text-center" md="6" lg="3">
                        Data Analysis / Big Data
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        <strong>User Interface Design</strong>
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
                        <strong>Git / Version Control</strong>
                      </Col>
                      <Col className="mt-1 text-center" md="6" lg="3">
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
