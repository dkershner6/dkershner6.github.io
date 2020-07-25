import React, { ReactElement, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export interface IProjectFilters {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectFilters = ({
    inputText,
    setInputText
}: IProjectFilters): ReactElement => {
    return (
        <Row className="mb-5">
            <Col>
                <Form.Group controlId="formFilter">
                    <Form.Control
                        type="text"
                        placeholder="Filter"
                        value={inputText}
                        onChange={(event) => setInputText(event.target.value)}
                    />
                </Form.Group>
            </Col>
        </Row>
    );
};

export default ProjectFilters;
