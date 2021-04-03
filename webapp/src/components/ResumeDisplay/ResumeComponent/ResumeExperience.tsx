import React, { ReactElement } from 'react';

import {
    Accordion,
    AccordionSummary,
    Box,
    Typography,
    AccordionDetails,
    Grid
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { JsonResume } from '../../../lib/common/resume/JsonResume';

const ResumeExperience = ({
    work
}: {
    work: JsonResume['work'];
}): ReactElement => {
    const renderExperience = () => {
        return work.map((job, index) => {
            return (
                <Box key={index} width="100%" marginBottom="3rem">
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography variant="h6">{job.name}</Typography>
                            <Typography variant="subtitle1" color="primary">
                                {job.position}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {job.startDate} - {job.endDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle2">
                                {job.location}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box marginTop="1rem">
                        <Typography variant="body1">{job.summary}</Typography>
                    </Box>
                </Box>
            );
        });
    };

    return (
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
                        Leader.
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails style={{ display: 'block' }}>
                {renderExperience()}
            </AccordionDetails>
        </Accordion>
    );
};

export default ResumeExperience;
