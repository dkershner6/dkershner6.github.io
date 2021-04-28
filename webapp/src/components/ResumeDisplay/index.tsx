import React, { ReactElement, useState } from 'react';

import Resume from '../../lib/common/resume/Resume';

import CoverLetter from './CoverLetter';
import ResumeComponent from './ResumeComponent';

enum ResumeComponentType {
    CoverLetter = 'CoverLetter',
    Resume = 'Resume'
}

interface ResumeDisplayProps {
    resume: Resume;
}

const ResumeDisplay = ({ resume }: ResumeDisplayProps): ReactElement => {
    const [componentToDisplay, setComponentToDisplay] = useState(
        resume.coverLetter?.length > 0
            ? ResumeComponentType.CoverLetter
            : ResumeComponentType.Resume
    );

    const goToResume = () => {
        setComponentToDisplay(ResumeComponentType.Resume);
    };

    if (componentToDisplay === ResumeComponentType.CoverLetter) {
        return (
            <CoverLetter
                coverLetter={resume.coverLetter}
                goToResume={goToResume}
            />
        );
    }

    return <ResumeComponent resume={resume.resume} />;
};

export default ResumeDisplay;
