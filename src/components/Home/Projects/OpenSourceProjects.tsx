import React, { ReactElement } from 'react';
import { Table } from 'react-bootstrap';
import ProjectTableHead from './ProjectTableHead';
import ProjectTableRow from './ProjectTableRow';

const OpenSourceProjects = (): ReactElement => {
    return (
        <Table hover striped>
            <ProjectTableHead />
            <tbody>
                <ProjectTableRow
                    link="https://github.com/dkershner6/dkershner.com"
                    name="DKershner.com"
                    description="This, mostly useless, website."
                />
                <ProjectTableRow
                    link="https://github.com/dkershner6/gitignore-parser"
                    name="GitIgnore Parser GitHub Action"
                    description="GitHub Action to parse a .gitignore file for information."
                />
                <ProjectTableRow
                    link="https://github.com/dkershner6/jest-coverage-commenter-action"
                    name="Jest Coverage PR Commenter GitHub Action"
                    description="Comment on PRs with Jest Test Coverage Information"
                />
                <ProjectTableRow
                    link="https://github.com/dkershner6/githubactions-result-reporter"
                    name="GitHubActions.com Result Reporter GitHub Action"
                    description="Report Results for actions started using GitHubActions.com."
                />
                <ProjectTableRow
                    link="https://github.com/dkershner6/useMapAsState"
                    name="useMapAsState React Hook"
                    description="React Hook to use a Map object as React State, with the same interface as normal JavaScript Maps."
                />
                <ProjectTableRow
                    link="https://github.com/dkershner6/react-hooks-firebase-auth"
                    name="Firebase Auth React"
                    description="Library for easy handling of Firebase Authentication, complete with provider token related events."
                />
                <ProjectTableRow
                    link="https://github.com/dkershner6/tsv-parse"
                    name="tsv-parse NPM Package"
                    description="Simple TSV parser for Node."
                />
            </tbody>
        </Table>
    );
};

export default OpenSourceProjects;
