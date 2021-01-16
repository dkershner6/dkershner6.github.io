import React, { ReactElement } from 'react';

import { Box, Chip, Link, TableCell, TableRow } from '@material-ui/core';
import { DiApple, DiAndroid } from 'react-icons/di';
import styled from 'styled-components';

import Project from './Project';

const NameContainer = styled.div`
    display: flex;
`;

const ProjectTableRow = ({
    category,
    topics,
    link,
    name,
    description,
    language
}: Project): ReactElement => {
    const renderMobileButton = (
        type: 'ios' | 'android',
        link?: string
    ): ReactElement => {
        if (link) {
            return (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                        type === 'ios'
                            ? `Download iOS App for ${name}`
                            : `Download Android App for ${name}`
                    }
                >
                    {type === 'ios' ? <DiApple /> : <DiAndroid />}
                </Link>
            );
        }
    };
    const renderName = (): ReactElement => {
        if (link) {
            if (typeof link === 'string') {
                return (
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        {name}
                    </Link>
                );
            }
            return (
                <NameContainer>
                    <Box alignSelf="center" flex={1}>
                        {name}
                    </Box>
                    <Box alignSelf="center">
                        {renderMobileButton('ios', link.ios)}
                    </Box>
                    <Box alignSelf="center">
                        {renderMobileButton('android', link.android)}
                    </Box>
                </NameContainer>
            );
        }
        return <p>{name}</p>;
    };

    return (
        <TableRow>
            <TableCell>
                <Chip size="small" color="primary" label={category} />
            </TableCell>
            <TableCell>
                {topics.map((topic) => (
                    <Chip key={topic} size="small" label={topic} />
                ))}
            </TableCell>
            <TableCell>
                <Chip size="small" color="secondary" label={language} />
            </TableCell>
            <TableCell>{renderName()}</TableCell>
            <TableCell>{description}</TableCell>
        </TableRow>
    );
};

export default ProjectTableRow;
