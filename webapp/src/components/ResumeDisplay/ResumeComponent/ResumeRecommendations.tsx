import React, { ReactElement } from 'react';

import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { LINKEDIN_URL } from '../../../lib/common/personalConstants';

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
            <AccordionDetails>
                <Box>
                    <p>References are available upon request.</p>
                    <p>
                        Many recommendations are available on my{' '}
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn profile
                        </a>
                        .
                    </p>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default ResumeRecommendations;
