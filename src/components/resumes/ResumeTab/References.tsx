import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import IResume from '../IResume';

import { IResumeTab } from '../ResumeTab';

interface IReferences extends IResumeTab {
    resume: IResume;
}

const References = (props: IReferences) => {
    const { resume } = props;
    return (
        <Row className="mt-3">
            <Col>
                <Card border="secondary">
                    <Card.Header>
                        <h3>References</h3>
                    </Card.Header>
                    <ListGroup className="list-group-flush">
                        {resume.references.map((reference, index) => (
                            <ListGroupItem key={index}>
                                <a href={reference.link} target="_blank" rel="noopener noreferrer">
                                    {reference.name}
                                </a>{' '}
                                - {reference.description}
                            </ListGroupItem>
                        ))}
                        <ListGroupItem>{resume.references.length > 0 ? 'More r' : 'R'}eferences available upon request.</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                        Recommendations can be found on{' '}
                        <a href="https://www.linkedin.com/in/derek-kershner-54b3392/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        .
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default References;
