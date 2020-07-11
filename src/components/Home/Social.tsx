import React, { ReactElement } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

const Social = (): ReactElement => {
    return (
        <Jumbotron id="social" className="bg-info text-light">
            <Container className="mt-3">
                <Row className="mt-3 text-center">
                    <Col>
                        <h3 className="display-4 text-center">
                            Social / Learning
                        </h3>
                        <Button
                            variant="info"
                            href="https://www.linkedin.com/in/derek-kershner-54b3392"
                        >
                            LinkedIn
                        </Button>

                        <Button
                            variant="info"
                            href="https://github.com/dkershner6"
                        >
                            GitHub
                        </Button>

                        <Button
                            variant="info"
                            href="https://app.pluralsight.com/profile/dkershner"
                        >
                            Pluralsight
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Social;
