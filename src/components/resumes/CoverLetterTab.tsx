import React from 'react';
import { Container } from 'react-bootstrap';

import ResumeHeader from './ResumeTab/ResumeHeader';
import CoverLetter from './CoverLetterTab/CoverLetter';

interface ICoverLetterTab {
    company: string;
}

const CoverLetterTab = (props: ICoverLetterTab) => {
    return (
        <Container className="mt-5">
            <ResumeHeader {...props} />
            <CoverLetter {...props} />
        </Container>
    );
};

export default CoverLetterTab;
