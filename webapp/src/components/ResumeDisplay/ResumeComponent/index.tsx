import React, { ReactElement } from 'react';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { JsonResume } from '../../../lib/common/resume/JsonResume';

import ResumeBasics from './ResumeBasics';
import ResumeObjective from './ResumeObjective';

const ResumeComponent = ({ resume }: { resume: JsonResume }): ReactElement => {
    return (
        <Container>
            <ResumeBasics basics={resume.basics} />
            <Box marginTop="1rem">
                <ResumeObjective objective={resume.basics.summary} />
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="experience-header"
                        aria-controls="experience-content"
                    >
                        <Box flexBasis="33.33%">
                            <Typography variant="h5">Experience</Typography>
                        </Box>
                        <Box alignSelf="center">
                            <Typography variant="body1" color="textSecondary">
                                Leader. Learner.
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        {JSON.stringify(resume.work)}
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
};

export default ResumeComponent;
