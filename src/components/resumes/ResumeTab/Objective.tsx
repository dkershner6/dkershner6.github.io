import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import IResume from '../IResume';
import { IResumeTab } from '../ResumeTab';

interface IObjective extends IResumeTab {
    resume: IResume;
}

const Objective = (props: IObjective) => {
    return (
        <Row className="mt-3">
            <Col>
                <Card border="secondary">
                    <Card.Header>
                        <h3>Objective</h3>
                    </Card.Header>
                    <Card.Body>
                        <p>{props.resume.objective}</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Objective;
