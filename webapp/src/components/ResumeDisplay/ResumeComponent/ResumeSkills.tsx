import React, { ReactElement } from 'react';

import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Grid,
    Box
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { JsonResume } from '../../../lib/common/resume/JsonResume';

const ResumeSkills = ({
    skills
}: {
    skills: JsonResume['skills'];
}): ReactElement => {
    const renderSkills = () => {
        return (
            <ul>
                {skills.map((skill, index) => {
                    return <li key={index}>{skill.name}</li>;
                })}
            </ul>
        );
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="skills-header"
                aria-controls="skills-content"
            >
                <Grid container justify="flex-start" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h5">Relevant Skills</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" color="textSecondary">
                            Learner.
                        </Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Box>{renderSkills()}</Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default ResumeSkills;
