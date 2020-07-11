import React, { ReactElement } from 'react';
import { Table } from 'react-bootstrap';
import ProjectTableHead from './ProjectTableHead';
import ProjectTableRow from './ProjectTableRow';

const SaasProjects = (): ReactElement => {
    return (
        <Table hover striped>
            <ProjectTableHead />
            <tbody>
                <ProjectTableRow
                    link="https://githubactions.com"
                    name="GitHubActions.com"
                    description="GitHubActions.com provides tools for simplifying GitHubActions,
                specializing in manually triggering actions."
                />
            </tbody>
        </Table>
    );
};

export default SaasProjects;
