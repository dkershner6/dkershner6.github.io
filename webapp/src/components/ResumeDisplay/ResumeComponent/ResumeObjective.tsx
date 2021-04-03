import React, { ReactElement } from 'react';

import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ResumeObjective = ({
    objective
}: {
    objective: string;
}): ReactElement => {
    return (
        <Accordion defaultExpanded={true}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="objective-header"
                aria-controls="objective-content"
            >
                <Typography variant="h5" component="h2">
                    Objective
                </Typography>
            </AccordionSummary>
            <AccordionDetails>{objective}</AccordionDetails>
        </Accordion>
    );
};

export default ResumeObjective;
