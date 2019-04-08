import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Error = () => {
  return (
    <Container>
      <div className='page-header' style={{ padding: 40 }}>
        <h1>Uh Oh!</h1>
      </div>
      <Jumbotron>
        <h5>Something has gone horribly wrong.</h5>
        <h6>I don't know what to say.</h6>
      </Jumbotron>
    </Container>
  );
};

export default Error;
