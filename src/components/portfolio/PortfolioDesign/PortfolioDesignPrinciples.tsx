import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const PortfolioDesignPrinciples = () => {
  return (
    <Row className='mt-3'>
      <Col>
        <Card bg='primary'>
          <Card.Header>
            <h2 className='text-light'>
              General Application Design Principles
            </h2>
          </Card.Header>
          <ListGroup>
            <ListGroupItem>
              Microservices...to a point. Never a monolith, but let scale
              justify a new application service. I don't necessarily agree with{' '}
              <a href='https://buttercms.com/books/microservices-for-startups/should-you-always-start-with-a-monolith'>
                the argument that monoliths should be the initial design for
                startup apps
              </a>
              , but understand the reasons and err in that direction.
            </ListGroupItem>
            <ListGroupItem>
              Data is generally grouped for the entire app in a single instance.
              Data is not combined with other apps, but neither is it split out
              to a single concern. My reasons for this are the minimum financial
              and management costs associated with provisioning a database
              exceed the benefits from reliability gains.
            </ListGroupItem>
            <ListGroupItem>
              Use technologies that minimize ongoing maintenance of the
              application. This generally means heavy use of serverless
              technologies. The reasoning behind this is that maintenance
              typically exceeds development in terms of cost and time, so the
              additional costs for not managing infrastructure are justfied at
              small to medium scale.
            </ListGroupItem>
            <ListGroupItem>
              Some cloud-specific technologies are used, but generally
              cloud-agnostic technologies are preferred. This generally means
              heavy use of containers.
            </ListGroupItem>
            <ListGroupItem>
              Continuous Integration & Deployment is used in all cases. In
              nearly all cases, the flow is from GitHub to Azure DevOps/VSTS to
              the deployment target.
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default PortfolioDesignPrinciples;
