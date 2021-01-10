import React, { ReactElement, useCallback, useMemo, useState } from 'react';

import { Jumbotron, Container, Table, Spinner } from 'react-bootstrap';
import { useDebounce } from 'use-debounce';

import Project, { ProjectCategory } from './Project';
import ProjectFilters from './ProjectFilters';
import projectData from './projectsData';
import ProjectTableHead from './ProjectTableHead';
import ProjectTableRow from './ProjectTableRow';
import useGitHubProjects from './useGitHubProjects';

const Projects = (): ReactElement => {
    const [inputText, setInputText] = useState('');
    const [filterText] = useDebounce(inputText, 350);
    const [categoryFilter, setCategoryFilter] = useState(ProjectCategory.ALL);
    const openSourceProjects = useGitHubProjects();

    const allProjects = useMemo(() => [...openSourceProjects, ...projectData], [
        openSourceProjects
    ]);

    const isInCategory = useCallback(
        (project: Project) => {
            return (
                categoryFilter === ProjectCategory.ALL ||
                project.category === categoryFilter
            );
        },
        [categoryFilter]
    );

    const hasFilterText = useCallback(
        (project: Project) => {
            return (
                !filterText ||
                filterText.length === 0 ||
                [
                    project.category,
                    project.language,
                    ...project.topics,
                    project.name,
                    project.description
                ].some((projectData) =>
                    projectData.toLowerCase().includes(filterText.toLowerCase())
                )
            );
        },
        [filterText]
    );

    const projects = useMemo(() => {
        return allProjects
            .filter(
                (project) => isInCategory(project) && hasFilterText(project)
            )
            .sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            );
    }, [allProjects, isInCategory, hasFilterText]);

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
                <h2 className="display-4 text-center mb-5">Public Projects</h2>
                <ProjectFilters
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
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
