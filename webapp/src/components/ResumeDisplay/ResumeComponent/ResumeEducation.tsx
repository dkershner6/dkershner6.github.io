import React, { ReactElement } from 'react';

import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { JsonResume } from '../../../lib/common/resume/JsonResume';

const ResumeEducation = ({
    education
}: {
    education: JsonResume['education'];
}): ReactElement => {
    const renderSchools = () => {
        return education.map((school, index) => {
            return (
                <Box key={index} width="100%" marginBottom="3rem">
                    <Box>
                        <Typography variant="h6">
                            {school.institution}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            {school.studyType}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {school.startDate} - {school.endDate}
                        </Typography>
                    </Box>
                </Box>
            );
        });
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="education-header"
                aria-controls="education-content"
            >
                <Grid container justify="flex-start" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h5">Education</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                        ></Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails style={{ display: 'block' }}>
                {renderSchools()}
            </AccordionDetails>
        </Accordion>
    );
};

export default ResumeEducation;
