import React, { ReactElement } from 'react';

import {
    Container,
    Grid,
    IconButton,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';
import styled from 'styled-components';

import {
    LINKEDIN_URL,
    GITHUB_URL
} from '../../../lib/common/personalConstants';
import HoverPaper from '../../common/HoverPaper';

import ProlificPaper, { ProlificPaperProps } from './ProlificPaper';

const InfoGridContainer = styled.div`
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 3rem;
    background-color: ${(props) => props.theme.palette.grey[300]};
`;

type InfoGridProps = ProlificPaperProps;

const InfoGrid = ({ codingStats, serverDate }: InfoGridProps): ReactElement => {
    return (
        <InfoGridContainer>
            <Container>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12} md={4}>
                        <HoverPaper
                            defaultContent={
                                <>
                                    <Typography variant="h4" component="h1">
                                        Derek Kershner
                                    </Typography>
                                    <Typography
                                        color="primary"
                                        variant="subtitle1"
                                        component="h2"
                                    >
                                        Software Architect
                                    </Typography>
                                </>
                            }
                            hoverContent={
                                <>
                                    <IconButton
                                        aria-label="LinkedIn"
                                        href={LINKEDIN_URL}
                                    >
                                        <LinkedIn color="primary" />
                                    </IconButton>
                                    <IconButton
                                        aria-label="GitHub Profile"
                                        href={GITHUB_URL}
                                    >
                                        <GitHub color="primary" />
                                    </IconButton>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ProlificPaper
                            codingStats={codingStats}
                            serverDate={serverDate}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <HoverPaper
                            defaultContent={
                                <Typography
                                    color="primary"
                                    variant="h4"
                                    component="h3"
                                >
                                    Technical Leader
                                </Typography>
                            }
                            hoverContent={
                                <>
                                    <ListItem
                                        button
                                        component="a"
                                        href="https://www.linkedin.com/in/derek-kershner-54b3392/"
                                    >
                                        <ListItemText>
                                            7+ years business leadership,
                                            including Senior Management &
                                            Director level
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem
                                        button
                                        component="a"
                                        href="https://www.linkedin.com/in/derek-kershner-54b3392/"
                                    >
                                        <ListItemText>
                                            Technical architecture leadership
                                            from start-ups to medium-size
                                            companies, AWS to Azure
                                        </ListItemText>
                                    </ListItem>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <HoverPaper
                            defaultContent={
                                <Typography color="secondary" variant="h4">
                                    Learner
                                </Typography>
                            }
                            hoverContent={
                                <Typography color="secondary" variant="h6">
                                    Rapid. Unending.
                                </Typography>
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </InfoGridContainer>
    );
};

export default InfoGrid;
