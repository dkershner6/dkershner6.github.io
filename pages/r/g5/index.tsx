import React from 'react';

import SiteWrapper from '../../../src/components/common/SiteWrapper';
import Resume from '../../../src/components/resumes/Resume';

const ResumeDisplay = () => {
    return (
        <SiteWrapper>
            <Resume company="g5" />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
