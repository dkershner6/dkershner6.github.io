import React, { ReactElement } from 'react';

import { Container, Button, Typography } from '@material-ui/core';
import Arrow from 'react-arrow';
import styled from 'styled-components';

import CodingStats from '../../../lib/common/CodingStats';

import HeroStats from './HeroStats';

const HeroContainer = styled.div`
    width: 100%;
    background-color: #391408;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='129' height='129' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23301107' %3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='1'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
    text-align: center;
    padding: 7rem 3rem;
`;

export interface HeroProps {
    heading: string;
    subheading: string;
    codingStats: CodingStats;
}

const Hero = (props: HeroProps): ReactElement => {
    const { heading, subheading, codingStats } = props;

    const renderHeading = (): ReactElement => (
        <div>
            <h1>
                <strong>
                    <Typography component="span" variant="h2" color="primary">
                        {'>'}
                    </Typography>
                    <Typography
                        component="span"
                        variant="h2"
                        color="textSecondary"
                    >
                        {heading}
                    </Typography>
                    <span className="display-4 text-primary">{'<'}</span>
                </strong>
            </h1>
        </div>
    );

    const renderSubheading = (): ReactElement => (
        <div>
            <h4 data-testid="subheading" className="text-white">
                {subheading}
            </h4>
        </div>
    );

    const renderArrowButton = (): ReactElement => (
        <div>
            <a href="#projects">
                <Button variant="contained" color="primary">
                    <Arrow
                        direction="down"
                        shaftWidth={25}
                        shaftLength={25}
                        headWidth={50}
                        headLength={25}
                        fill="white"
                        stroke="white"
                        strokeWidth={1}
                    />
                </Button>
            </a>
        </div>
    );

    return (
        <HeroContainer>
            {renderHeading()}
            {renderSubheading()}
            <HeroStats codingStats={codingStats} />
            {renderArrowButton()}
        </HeroContainer>
    );
};

export default Hero;
