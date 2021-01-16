import React, { ReactElement } from 'react';

import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

import CodingStats from '../../../lib/common/CodingStats';

import HeroStats from './HeroStats';

const LightHeroImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='129' height='129' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d9b36c' fill-opacity='0.41'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.41'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E")`;
const DarkHeroImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='129' height='129' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23301107' %3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='1'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");`;

const HeroContainer = styled.div`
    background-color: ${(props) =>
        props.theme?.palette?.type === 'light' ? '#ffd27f' : '#391408'};
    background-image: ${(props) =>
        props.theme?.palette?.type === 'light'
            ? LightHeroImage
            : DarkHeroImage};
`;

const HeroOverlay = styled.div`
    width: 100%;
    background-color: ${(props) =>
        props.theme?.palette?.type === 'light'
            ? 'rgba(255, 255,255, 0.7)'
            : 'transparent'};
    text-align: center;
    padding: 7rem 3rem;
`;
export interface HeroProps {
    heading: string;
    subheading: string;
    codingStats: CodingStats;
    serverDate: Date;
}

const HeadingContainer = styled(Container)`
    margin-bottom: 2rem;
`;

const Hero = (props: HeroProps): ReactElement => {
    const { heading, subheading, codingStats, serverDate } = props;

    const renderHeading = (): ReactElement => (
        <h1>
            <Typography component="span" variant="h2" color="secondary">
                {'>'}
            </Typography>
            <Typography component="span" variant="h2">
                {heading}
            </Typography>
            <Typography component="span" variant="h2" color="secondary">
                {'<'}
            </Typography>
        </h1>
    );

    const renderSubheading = (): ReactElement => (
        <div>
            <Typography data-testid="subheading" variant="h5" component="h2">
                {subheading}
            </Typography>
        </div>
    );

    return (
        <HeroContainer>
            <HeroOverlay>
                <HeadingContainer>
                    {renderHeading()}
                    {renderSubheading()}
                </HeadingContainer>
                <Container>
                    <HeroStats
                        codingStats={codingStats}
                        serverDate={serverDate}
                    />
                </Container>
            </HeroOverlay>
        </HeroContainer>
    );
};

export default Hero;
