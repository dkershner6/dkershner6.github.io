import React, { ReactElement } from 'react';
import IProject from './IProject';
import { Badge } from 'react-bootstrap';

const ProjectTableRow = ({
    category,
    topics,
    link,
    name,
    description,
    language
}: IProject): ReactElement => {
    const renderName = (): ReactElement => {
        if (link) {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}
                </a>
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
