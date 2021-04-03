import React, { ReactElement } from 'react';

import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ResumeRecommendations = (): ReactElement => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="recommendations-header"
                aria-controls="recommendations-content"
            >
                <Typography variant="h5">References</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ display: 'block' }}>
                <p>References are available upon request.</p>
                <p>
                    Many recommendations are available on my LinkedIn profile.
                </p>
            </AccordionDetails>
        </Accordion>
    );
};

export default ResumeRecommendations;
