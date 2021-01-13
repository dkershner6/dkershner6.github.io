import React, { ReactElement } from 'react';

const ProjectTableHead = (): ReactElement => {
    return (
        <thead>
            <tr>
                <th>Category</th>
                <th>Tech</th>
                <th>Language</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
    );
};

export default ProjectTableHead;
