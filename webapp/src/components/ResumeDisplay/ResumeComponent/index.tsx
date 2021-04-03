import React, { ReactElement } from 'react';

import { Box, Container } from '@material-ui/core';

import { JsonResume } from '../../../lib/common/resume/JsonResume';

import ResumeBasics from './ResumeBasics';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeObjective from './ResumeObjective';
import ResumeRecommendations from './ResumeRecommendations';

const ResumeComponent = ({ resume }: { resume: JsonResume }): ReactElement => {
    return (
        <Container>
            <ResumeBasics basics={resume.basics} />
            <Box marginTop="1rem">
                <ResumeObjective objective={resume.basics.summary} />
                <ResumeExperience work={resume.work} />
                <ResumeEducation education={resume.education} />
                <ResumeRecommendations />
            </Box>
        </Container>
    );
};

export default ResumeComponent;
