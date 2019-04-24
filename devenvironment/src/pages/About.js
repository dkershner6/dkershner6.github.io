import React from 'react';
import { Container, Jumbotron, Card, Button, Row, Col } from 'react-bootstrap';
import HelmetHead from '../components/Seo';

const About = () => {
  return (
    <Container>
      <HelmetHead title='About | DKershner.com' />
      <div className='page-header' style={{ padding: 40 }}>
        <h1>About</h1>
      </div>
      <Jumbotron>
        <h2>Serverless and Cloud from the start</h2>

        <h6>
          From the start of serverless technology's existence, I have whole
          heartedly embraced the cutting edge of the technology. In this effort,
          Azure Functions V2 (.Net Core 2.0) are the primary vehicle for our
          software. This, combined with static serverless websites primarily
          written in React provides the User Interface for all of the apps.
        </h6>
      </Jumbotron>
      <Card text='white'>
        <Card.Header>
          <h3> Find me on other platforms:</h3>
        </Card.Header>
        <Card.Body>
          <Row>
          <Col>
            <Button href='https://www.linkedin.com/in/derek-kershner-54b3392'>
              LinkedIn
            </Button>
            </Col>
            <Col>
            <Button href='https://github.com/dkershner6'>GitHub</Button>
            </Col>
            <Col>
            <Button href='https://app.pluralsight.com/profile/dkershner'>
              Pluralsight
            </Button>
            </Col>
            </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
