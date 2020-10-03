import React, { ReactElement, useMemo, useState } from 'react';
import { Jumbotron, Container, Table, Spinner } from 'react-bootstrap';
import { useDebounce } from 'use-debounce';
import useGitHubProjects from './useGitHubProjects';
import projectData from './projectsData';
import ProjectFilters from './ProjectFilters';
import ProjectTableRow from './ProjectTableRow';
import ProjectTableHead from './ProjectTableHead';

const Projects = (): ReactElement => {
    const [inputText, setInputText] = useState('');
    const [filterText] = useDebounce(inputText, 350);
    const openSourceProjects = useGitHubProjects();

    const projects = useMemo(() => {
        return [...openSourceProjects, ...projectData]
            .filter(
                (project) =>
                    !filterText ||
                    filterText.length === 0 ||
                    [
                        project.category,
                        project.language,
                        ...project.topics,
                        project.name,
                        project.description
                    ].some((projectData) =>
                        projectData
                            .toLowerCase()
                            .includes(filterText.toLowerCase())
                    )
            )
            .sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            );
    }, [openSourceProjects, filterText]);

    const renderTableRows = (): ReactElement => {
        if (openSourceProjects.length === 0) {
            return (
                <tr>
                    <td colSpan={5}>
                        <Spinner animation="border" />
                    </td>
                </tr>
            );
        }

        return (
            <>
                {projects.map((project) => (
                    <ProjectTableRow key={project.name} {...project} />
                ))}
            </>
        );
    };

    return (
        <Jumbotron fluid id="projects" className="bg-secondary">
            <Container
                fluid
                style={{ minHeight: '50rem', overflowX: 'auto' }}
                className="bg-secondary"
            >
                <h2 className="display-4 text-center mb-5">Projects</h2>
                <ProjectFilters
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <Table hover striped responsive size="sm">
                    <ProjectTableHead />
                    <tbody>{renderTableRows()}</tbody>
                </Table>
            </Container>
        </Jumbotron>
    );
};

export default Projects;
