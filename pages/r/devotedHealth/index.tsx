import React from 'react';

import SiteWrapper from '../../../src/components/common/SiteWrapper';
import Resume from '../../../src/components/resumes/Resume';

const ResumeDisplay = () => {
    return (
        <SiteWrapper>
            <Resume company="devotedHealth" />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
