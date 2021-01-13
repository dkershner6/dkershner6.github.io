import React, { ReactElement, useMemo, useState } from 'react';

import {
    formatDuration,
    intervalToDuration,
    differenceInBusinessDays,
    startOfYear
} from 'date-fns';
import { Col, Row } from 'react-bootstrap';
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
            <Row className="mt-3">
                <Col className=" display-4 text-success">
                    {totalContributions.toLocaleString()}
                </Col>
            </Row>
            <Row>
                <Col className="text-white">
                    <a
                        href="https://github.com/dkershner6"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contributions
                    </a>{' '}
                    over
                </Col>
            </Row>
            <Row>
                <Col className="text-white">{codingDuration}</Col>
            </Row>
            <Row>
                <Col className="text-white">
                    (Averaging about {averagePerWorkingDay} per working day)
                </Col>
            </Row>
        </>
    );
};

export default HeroStats;
