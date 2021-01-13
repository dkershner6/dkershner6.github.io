import React, { ReactElement, useMemo, useState } from 'react';

import {
    formatDuration,
    intervalToDuration,
    differenceInBusinessDays,
    startOfYear
} from 'date-fns';
import useInterval from 'react-useinterval';

import CodingStats from '../../../lib/common/CodingStats';
import { CODING_START_DATE } from '../../../lib/common/gitHubStats';

interface HeroStatsProps {
    codingStats: CodingStats;
}

const calculateDuration = (): string => {
    return formatDuration(
        intervalToDuration({
            end: new Date(),
            start: new Date(CODING_START_DATE)
        })
    );
};

const HeroStats = ({ codingStats }: HeroStatsProps): ReactElement => {
    const [codingDuration, setCodingDuration] = useState<string>(
        calculateDuration()
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
        <>
            <div>{totalContributions.toLocaleString()}</div>
            <div>
                <a
                    href="https://github.com/dkershner6"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    contributions
                </a>{' '}
                over
            </div>
            <div>{codingDuration}</div>
            <div>(Averaging about {averagePerWorkingDay} per working day)</div>
        </>
    );
};

export default HeroStats;
