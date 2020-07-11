import { ReactElement } from 'react';
import { Table } from 'react-bootstrap';

import ProjectTableHead from './ProjectTableHead';
import ProjectTableRow from './ProjectTableRow';

const CodeChallenges = (): ReactElement => {
    return (
        <Table hover striped>
            <ProjectTableHead />
            <tbody>
                <ProjectTableRow
                    link="https://github.com/dkershner6/AutomatedMinesweeper"
                    name="Automated Minesweeper"
                    description="Coding challenge to explode as many mines as possible."
                />
            </tbody>
        </Table>
    );
};

export default CodeChallenges;
