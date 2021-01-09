import React, { ReactElement } from 'react';

import { Row, Col, Form, Tabs, Tab } from 'react-bootstrap';

import { ProjectCategory } from '../IProject';

export interface IProjectFilters {
    categoryFilter: string;
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const projectCategories = Object.values(ProjectCategory);

const ProjectFilters = ({
    categoryFilter,
    setCategoryFilter,
    inputText,
    setInputText
}: IProjectFilters): ReactElement => {
    return (
        <>
            <Row className="justify-content-md-center">
                <Col xs="12" md="9">
                    <Form.Group controlId="formFilter">
                        <Form.Control
                            type="text"
                            placeholder="Filter"
                            value={inputText}
                            onChange={(event) =>
                                setInputText(event.target.value)
                            }
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="auto">
                    <Tabs
                        id="category-tabs"
                        activeKey={categoryFilter}
                        onSelect={(key) => setCategoryFilter(key)}
                    >
                        {projectCategories.map((categoryName) => (
                            <Tab
                                key={categoryName}
                                eventKey={categoryName}
                                title={categoryName}
                            />
                        ))}
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default ProjectFilters;
