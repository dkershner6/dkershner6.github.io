import React, { ReactElement } from 'react';

import { TableCell, TableHead, TableRow } from '@material-ui/core';

const ProjectTableHead = (): ReactElement => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Tech</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default ProjectTableHead;
