import { Table } from 'react-bootstrap';
import { ReactElement } from 'react';
import ProjectTableHead from './ProjectTableHead';
import ProjectTableRow from './ProjectTableRow';

const CommunityServiceProjects = (): ReactElement => {
    return (
        <Table hover striped>
            <ProjectTableHead />
            <tbody>
                <ProjectTableRow
                    name="Partners In Care"
                    description="Partners In Care is a Hospice and Home Health Non-Profit in Bend, OR. I develop tools to aid efficiency for various repetitive data entry tasks."
                />
            </tbody>
        </Table>
    );
};

export default CommunityServiceProjects;
