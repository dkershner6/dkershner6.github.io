import React, { ReactElement } from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { JsonResume } from '../../../lib/common/resume/JsonResume';

const PaddedPaper = styled(Paper)`
    margin-top: 1rem;
    padding: 2rem;
`;

const RightAlignGrid = styled(Grid)`
    text-align: right;
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
            <Grid container>
                <Grid item md={7}>
                    {renderName()}
                    <Typography variant="subtitle1">{basics.label}</Typography>
                </Grid>
                <RightAlignGrid item md={5}>
                    <Typography variant="body2">
                        {basics?.email ?? 'Retracted for bots'}
                    </Typography>
                    <Typography variant="body2">
                        {basics?.phone ?? 'Retracted for bots'}
                    </Typography>
                    <Typography variant="body2">
                        {basics?.profiles?.[0].url}
                    </Typography>
                    <Typography variant="body2">{basics?.url}</Typography>
                </RightAlignGrid>
            </Grid>
        </PaddedPaper>
    );
};

export default ResumeBasics;
