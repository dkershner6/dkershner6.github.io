import React, { useState, ReactElement } from 'react';
import { Col, Card, Row, Collapse, ListGroup, ListGroupItem } from 'react-bootstrap';
import TechnologyBadge from '../../components/TechnologyBadge';
import { getTechnologiesFromAttributes } from '../../classes/ProjectAttribute';
import Project from '../../classes/Project';
import ProjectSection from '../../classes/ProjectSection';

interface PortfolioDesignServiceProps {
    key?: number;
    project: Project;
    dataSection: ProjectSection;
    sectionId: string;
}

export const PortfolioDesignService = (props: PortfolioDesignServiceProps): ReactElement => {
    const [open, setOpen] = useState(false);

    const { project, dataSection, sectionId } = props;
    return (
        <Col className="mt-3" xs="12" xl={project[sectionId].length > 1 ? '6' : '12'}>
            <Card id={dataSection.id} bg="secondary" text="dark">
                <Card.Header style={{ cursor: 'pointer' }} onClick={(): void => setOpen(!open)}>
                    <Row>
                        <Col>
                            <h4>{dataSection.name}</h4>
                        </Col>
                        <Col>
                            {getTechnologiesFromAttributes(dataSection.attributes).map((technology, iindex) => (
                                <TechnologyBadge key={iindex} technology={technology} />
                            ))}
                        </Col>
                    </Row>
                </Card.Header>
                <Collapse in={open}>
                    <ListGroup>
                        {dataSection.attributes.map((dataSectionAttribute, iindex) => (
                            <ListGroupItem key={iindex} action={dataSectionAttribute.link !== undefined} href={dataSectionAttribute.link} target="_blank">
                                <Row>
                                    <Col xs="12" md="3">
                                        <strong className={dataSectionAttribute.name === 'Example' ? 'text-info' : ''}>{dataSectionAttribute.name}:</strong>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <p className={dataSectionAttribute.name === 'Example' ? 'text-info' : ''}>{dataSectionAttribute.value}</p>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Collapse>

                {dataSection.reasons !== undefined && dataSection.reasons.length > 0 && (
                    <Collapse in={open}>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <p>
                                        <strong>Reasons:</strong>
                                    </p>
                                    <ul>
                                        {dataSection.reasons.map((reason, iiindex) => (
                                            <li key={iiindex}>{reason}</li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Collapse>
                )}
            </Card>
        </Col>
    );
};
