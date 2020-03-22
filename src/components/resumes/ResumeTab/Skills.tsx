import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import SkillDisplay from '../../common/SkillDisplay';

import IResume from '../IResume';
import { IResumeTab } from '../ResumeTab';

interface ISkills extends IResumeTab {
    resume: IResume;
    format: string;
}

const Skills = (props: ISkills) => {
    const { resume, format } = props;
    return (
        <Row className="mt-3">
            <Col>
                <Card border="secondary">
                    <Card.Header>
                        <h3>Skills & Framework Familiarity</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <p className="text-muted">
                                    Any skill that directly matches a job requirement will be <strong>bolded</strong>.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            {resume.skills.map((skill, index) => (
                                <Col key={index} className="mt-2" xs="12" md="6">
                                    <Card border="secondary">
                                        <Card.Header>{skill.bolded ? <strong>{skill.name}</strong> : skill.name}</Card.Header>
                                        <ListGroup className="list-group-flush">
                                            {skill.subSkills.map((subSkill, iindex) => (
                                                <ListGroupItem
                                                    key={iindex}
                                                    action={format === 'print'}
                                                    href={format !== 'print' ? subSkill.link : ''}
                                                    target={format !== 'print' ? '_blank' : ''}>
                                                    <Row>
                                                        <Col>{subSkill.bolded ? <strong>{subSkill.name}</strong> : subSkill.name}:</Col>{' '}
                                                        <Col className="align-self-center">
                                                            <SkillDisplay filled={subSkill.score} />
                                                        </Col>
                                                    </Row>
                                                </ListGroupItem>
                                            ))}
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Card border="secondary">
                                    <Card.Header>Other Skills</Card.Header>
                                    <Card.Body>
                                        <Row className="mt-1">
                                            {resume.otherSkills.map((otherSkill, index) => (
                                                <Col key={index} className="mt-2 text-center" md="6" lg="3">
                                                    {otherSkill.bolded ? <strong>{otherSkill.name}</strong> : otherSkill.name}
                                                </Col>
                                            ))}
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Skills;
