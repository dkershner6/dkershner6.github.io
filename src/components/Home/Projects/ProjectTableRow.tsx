import React, { ReactElement } from 'react';
import IProject from './IProject';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import { DiApple, DiAndroid } from 'react-icons/di';

const ProjectTableRow = ({
    category,
    topics,
    link,
    name,
    description,
    language
}: IProject): ReactElement => {
    const renderMobileButton = (
        type: 'ios' | 'android',
        link?: string
    ): ReactElement => {
        if (link) {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {type === 'ios' ? <DiApple /> : <DiAndroid />}
                </a>
            );
        }
    };
    const renderName = (): ReactElement => {
        if (link) {
            if (typeof link === 'string') {
                return (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                );
            }
            return (
                <Row>
                    <Col className="align-self-center" xs="auto">
                        {name}
                    </Col>
                    <Col xs="auto">{renderMobileButton('ios', link.ios)}</Col>
                    <Col xs="auto">
                        {renderMobileButton('android', link.android)}
                    </Col>
                </Row>
            );
        }
        return <p>{name}</p>;
    };

    return (
        <tr>
            <td>
                <Badge pill variant="success">
                    {category}
                </Badge>
            </td>
            <td>
                {topics.map((topic) => (
                    <Badge key={topic} pill variant="info">
                        {topic}
                    </Badge>
                ))}
            </td>
            <td>
                <Badge pill variant="primary">
                    {language}
                </Badge>
            </td>
            <td>{renderName()}</td>
            <td>{description}</td>
        </tr>
    );
};

export default ProjectTableRow;
