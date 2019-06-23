import React from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";

const Experience = props => {
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <Card.Header>
            <h3>Experience</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card>
                  <Card.Header>
                    <h4>Owner - Kershner Endeavors LLC</h4>
                  </Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-success">
                      2014-Present
                    </ListGroupItem>
                    <ListGroupItem>
                      Consulting business focused on offering Software
                      Development, Cloud/IT Systems Administration, and Team
                      Management.
                    </ListGroupItem>
                    <ListGroupItem>
                      A principal partner in{" "}
                      <a href="https://eformedpartners.com" target="_blank">
                        eFormed Partners
                      </a>{" "}
                      as well, a group of e-commerce professionals who incubate
                      small businesses with enterprise level marketplace
                      software.
                    </ListGroupItem>
                    <ListGroupItem>
                      <p>Primary responsibilies:</p>
                      <ul>
                        <li>
                          Manage a team of Software Developers, including
                          offshore.
                        </li>
                        <li>
                          Plan, Design, Monitor, and implement all software
                          development.
                        </li>
                        <li>Automate deployment into the cloud (CI/CD).</li>
                      </ul>
                    </ListGroupItem>
                    <ListGroupItem>
                      Testimonials can be found on my{" "}
                      <a
                        href="https://www.linkedin.com/in/derek-kershner-54b3392/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>{" "}
                      under recommendations.
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header>
                    <h4>Director of Business Analytics - Altrec, Inc.</h4>
                  </Card.Header>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className="text-success">
                      2006-2014
                    </ListGroupItem>
                    <ListGroupItem>
                      E-commerce company focused on Outdoor Gear
                    </ListGroupItem>
                    <ListGroupItem>
                      <p>Primary responsibilies:</p>
                      <ul>
                        <li>Manage the marketing team.</li>
                        <li>
                          Serve as intelligence advisor to Senior Management.
                          Regularly meet with department heads and supervisors
                          to report on the state of the business, the reasons
                          behind it, and identify opportunities therein.
                        </li>
                        <li>
                          Provide data dashboards and reporting for all
                          departments, including Merchandise Planning and
                          Marketing Performance / Budgeting.
                        </li>
                      </ul>
                    </ListGroupItem>
                    <ListGroupItem>
                      Won awards for major business impact. Several
                      recommendations can be found on my{" "}
                      <a
                        href="https://www.linkedin.com/in/derek-kershner-54b3392/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                      .
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Experience;
