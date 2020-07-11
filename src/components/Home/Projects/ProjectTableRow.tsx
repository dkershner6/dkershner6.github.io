import { ReactElement } from 'react';

export interface IProjectTableRow {
    link?: string;
    name: string;
    description: string;
}

const ProjectTableRow = ({
    link,
    name,
    description
}: IProjectTableRow): ReactElement => {
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
            <td>{renderName()}</td>
            <td>{description}</td>
        </tr>
    );
};

export default ProjectTableRow;
