import React, { ReactElement } from 'react';

import { Box, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useRouter } from 'next/router';
import QrCode from 'react-qr-code';
import styled from 'styled-components';

import {
    LINKEDIN_URL,
    GITHUB_URL
} from '../../../lib/common/personalConstants';
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
    const router = useRouter();

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
            <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12} md="auto">
                    <Box display="flex" flexDirection="column">
                        {renderName()}
                        <Box textAlign="center">
                            <Typography variant="h6">{basics.label}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md="auto">
                    <Box display="flex">
                        <Box textAlign="right" flex="1">
                            <Typography variant="body2">
                                {basics?.email ??
                                    'Email Retracted - Check emailed copy'}
                            </Typography>
                            <Typography variant="body2">
                                {basics?.phone ??
                                    'Phone Retracted - Check emailed copy'}
                            </Typography>
                            <Typography variant="body2">
                                https://dkershner.com
                                {window.location.pathname}
                            </Typography>
                        </Box>
                        <Box marginLeft="0.5rem">
                            <QrCode
                                value={`https://dkershner.com${window.location.pathname}`}
                                size={64}
                            />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton aria-label="LinkedIn" href={LINKEDIN_URL}>
                            <LinkedInIcon color="primary" />
                        </IconButton>
                        <IconButton
                            aria-label="GitHub Profile"
                            href={GITHUB_URL}
                        >
                            <GitHubIcon color="primary" />
                        </IconButton>
                        <IconButton
                            aria-label="Homepage"
                            onClick={() => router.push('/')}
                        >
                            <HomeIcon color="primary" />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </PaddedPaper>
    );
};

export default ResumeBasics;
