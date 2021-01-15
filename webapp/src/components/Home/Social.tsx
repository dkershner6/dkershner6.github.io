import { Container, Button, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';

import styled from 'styled-components';

const SocialContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 5rem;
    background-color: ${(props) => props.theme.palette.secondary.light};
`;

const ButtonContainer = styled(Container)`
    margin-top: 2rem;
`;

const Social = (): ReactElement => {
    return (
        <SocialContainer>
            <Container>
                <Typography variant="h2" component="h3">
                    Social / Learning
                </Typography>
            </Container>
            <ButtonContainer>
                <Button
                    variant="contained"
                    color="secondary"
                    href="https://www.linkedin.com/in/derek-kershner-54b3392"
                >
                    LinkedIn
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    href="https://github.com/dkershner6"
                >
                    GitHub
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    href="https://app.pluralsight.com/profile/dkershner"
                >
                    Pluralsight
                </Button>
            </ButtonContainer>
        </SocialContainer>
    );
};

export default Social;
