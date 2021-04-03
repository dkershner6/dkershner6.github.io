import React, { ReactElement } from 'react';

import { Box, Button, Container, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

const PaddedPaper = styled(Paper)`
    margin-top: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
`;

const CoverLetter = ({
    coverLetter,
    goToResume
}: {
    coverLetter: string[];
    goToResume: () => void;
}): ReactElement => {
    const renderParagraph = ({ paragraph, index }): ReactElement => {
        if (index === 0) {
            return (
                <Typography key={index} variant="h5" component="h1">
                    {paragraph}
                </Typography>
            );
        }
        return (
            <Typography key={index} variant="body1">
                {paragraph}
            </Typography>
        );
    };

    const renderParagraphs = () => {
        return (
            <div>
                {coverLetter.map((paragraph, index) => {
                    return (
                        <Box key={index} margin="2rem">
                            {renderParagraph({ paragraph, index })}
                        </Box>
                    );
                })}
            </div>
        );
    };

    return (
        <Container>
            <PaddedPaper elevation={10}>
                {renderParagraphs()}
                <Box margin="2rem">
                    <Typography variant="h5">
                        Looking forward to speaking with you further,
                    </Typography>
                </Box>
                <Box margin="2rem">
                    <Typography variant="h3">Derek Kershner</Typography>
                </Box>
                <Box margin="2rem">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => goToResume()}
                    >
                        See Resume
                    </Button>
                </Box>
            </PaddedPaper>
        </Container>
    );
};

export default CoverLetter;
