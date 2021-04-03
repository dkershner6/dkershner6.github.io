import React, { ReactElement } from 'react';

import { Box, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { JsonResume } from '../../../lib/common/resume/JsonResume';

const PaddedPaper = styled(Paper)`
    margin-top: 1rem;
    padding: 2rem;
`;

const ResumeBasics = ({
    basics
}: {
    basics: JsonResume['basics'];
}): ReactElement => {
    const renderName = () => {
        const nameSplit = basics.name.split(' ');
        const [firstName, ...restOfName] = nameSplit;

        return (
            <Typography variant="h2" component="h1">
                <Typography variant="h2" component="span" color="primary">
                    {firstName}
                </Typography>{' '}
                {restOfName.join(' ')}
            </Typography>
        );
    };

    return (
        <PaddedPaper>
            <Box display="flex">
                <Box display="flex" flexDirection="column">
                    {renderName()}
                    <Box textAlign="center">
                        <Typography variant="h6">{basics.label}</Typography>
                    </Box>
                </Box>
                <Box textAlign="right" flex="1">
                    <Typography variant="body2">
                        {basics?.email ?? 'Retracted for bots'}
                    </Typography>
                    <Typography variant="body2">
                        {basics?.phone ?? 'Retracted for bots'}
                    </Typography>
                    <Typography variant="body2">
                        {basics?.profiles?.[0].url}
                    </Typography>
                    <Typography variant="body2">
                        This resume also available at {window.location.host}
                        {window.location.pathname}
                    </Typography>
                </Box>
            </Box>
        </PaddedPaper>
    );
};

export default ResumeBasics;
