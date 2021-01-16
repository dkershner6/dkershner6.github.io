import React, { ReactElement, useMemo, useState } from 'react';

import { Link, Typography } from '@material-ui/core';
import {
    formatDuration,
    intervalToDuration,
    differenceInBusinessDays,
    startOfYear
} from 'date-fns';
import useInterval from 'react-useinterval';
import styled from 'styled-components';

import CodingStats from '../../../lib/common/CodingStats';
import { CODING_START_DATE } from '../../../lib/common/gitHubStats';

const HeroStatsContainer = styled.div``;

interface HeroStatsProps {
    serverDate: Date;
    codingStats: CodingStats;
}

const calculateDuration = (endSeedDate?: Date): string => {
    return formatDuration(
        intervalToDuration({
            end: endSeedDate ?? new Date(),
            start: new Date(CODING_START_DATE)
        })
    );
};

const HeroStats = ({
    codingStats,
    serverDate
}: HeroStatsProps): ReactElement => {
    const [codingDuration, setCodingDuration] = useState<string>(
        calculateDuration(serverDate)
    );

    useInterval(() => setCodingDuration(calculateDuration()), 1000);

    const totalContributions = useMemo(() => {
        if (codingStats?.githubContributions) {
            return Object.entries(codingStats.githubContributions).reduce(
                (total, [, contribution]) => {
                    return (
                        total +
                        contribution.restrictedContributionsCount +
                        contribution.totalCommitContributions +
                        contribution.totalIssueContributions +
                        contribution.totalPullRequestContributions +
                        contribution.totalPullRequestReviewContributions +
                        contribution.totalRepositoryContributions
                    );
                },
                0
            );
        }
        return 0;
    }, [codingStats?.githubContributions]);

    const averagePerWorkingDay = useMemo(() => {
        const today = new Date();
        const contribution =
            codingStats.githubContributions[today.getUTCFullYear()];
        if (contribution) {
            const businessDays = differenceInBusinessDays(
                today,
                startOfYear(today)
            );
            const thisYearTotalContributions =
                contribution.restrictedContributionsCount +
                contribution.totalCommitContributions +
                contribution.totalIssueContributions +
                contribution.totalPullRequestContributions +
                contribution.totalPullRequestReviewContributions +
                contribution.totalRepositoryContributions;
            return Math.ceil(thisYearTotalContributions / businessDays);
        }
    }, [codingStats]);

    return (
        <HeroStatsContainer>
            <Typography variant="h3" color="primary">
                {totalContributions.toLocaleString()}
            </Typography>
            <Typography variant="subtitle1" component="h3">
                <Link
                    href="https://github.com/dkershner6"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contributions
                </Link>{' '}
                over
            </Typography>
            <Typography variant="subtitle1" component="h3">
                {codingDuration}
            </Typography>
            <Typography variant="subtitle1" component="h3">
                (Averaging about{' '}
                <Typography
                    variant="subtitle1"
                    color="primary"
                    component="span"
                >
                    {averagePerWorkingDay}
                </Typography>{' '}
                per working day)
            </Typography>
        </HeroStatsContainer>
    );
};

export default HeroStats;
