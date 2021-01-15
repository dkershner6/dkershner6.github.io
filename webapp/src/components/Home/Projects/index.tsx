import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { RestEndpointMethodTypes } from '@octokit/rest';
import { useDebounce } from 'use-debounce';

import Project, { ProjectCategory } from './Project';
import ProjectFilters from './ProjectFilters';
import projectData from './projectsData';
import ProjectTableHead from './ProjectTableHead';
import ProjectTableRow from './ProjectTableRow';
import useGitHubProjects from './useGitHubProjects';
import { Table, TableBody, Typography } from '@material-ui/core';

const ProjectsContainer = styled.div`
    padding: 3rem 0;
    text-align: center;
    background-color: ${(props) => props.theme.palette.background.paper};
`;

const ProjectsTableContainer = styled.div`
    overflow-x: auto;
`;

const Projects = ({
    repos
}: {
    repos: RestEndpointMethodTypes['repos']['listForUser']['response']['data'];
}): ReactElement => {
    const [inputText, setInputText] = useState('');
    const [filterText] = useDebounce(inputText, 350);
    const [categoryFilter, setCategoryFilter] = useState(ProjectCategory.ALL);
    const openSourceProjects = useGitHubProjects(repos);

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
        return (
            <>
                {projects.map((project) => (
                    <ProjectTableRow key={project.name} {...project} />
                ))}
            </>
        );
    };

    return (
        <ProjectsContainer id="projects">
            <Typography variant="h2" component="h3">
                Public Projects
            </Typography>
            <ProjectsTableContainer>
                <ProjectFilters
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    inputText={inputText}
                    setInputText={setInputText}
                />

                <Table size="small">
                    <ProjectTableHead />
                    <TableBody>{renderTableRows()}</TableBody>
                </Table>
            </ProjectsTableContainer>
        </ProjectsContainer>
    );
};

export default Projects;
