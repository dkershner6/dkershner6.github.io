import React, { useMemo, useState } from 'react';

import { Fade, Paper } from '@material-ui/core';
import styled from 'styled-components';

const PaddedPaper = styled(Paper)`
    display: flex;
    padding: 1rem;
    height: 15rem;
    align-items: center;
    justify-content: center;
`;

const HoverPaper = ({ hoverContent, defaultContent }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [hoverNeedsToExit, setHoverNeedsToExit] = useState(false);
    const [defaultNeedsToExit, setDefaultNeedsToExit] = useState(true);

    const displayHover = useMemo(
        () => !defaultNeedsToExit && (isHovering || hoverNeedsToExit),
        [defaultNeedsToExit, isHovering, hoverNeedsToExit]
    );

    const renderContent = () => {
        if (displayHover) {
            return (
                <Fade
                    in={isHovering}
                    onEntered={() => setHoverNeedsToExit(true)}
                    onExited={() => setHoverNeedsToExit(false)}
                    timeout={500}
                >
                    <div>{hoverContent}</div>
                </Fade>
            );
        }
        return (
            <Fade
                in={!isHovering}
                timeout={500}
                onEntered={() => setDefaultNeedsToExit(true)}
                onExited={() => setDefaultNeedsToExit(false)}
            >
                <div>{defaultContent}</div>
            </Fade>
        );
    };

    return (
        <div>
            <PaddedPaper
                elevation={6}
                onMouseEnter={() => {
                    setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div>{renderContent()}</div>
            </PaddedPaper>
        </div>
    );
};

export default HoverPaper;
