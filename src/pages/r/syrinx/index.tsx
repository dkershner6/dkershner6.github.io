import React from 'react';

import SiteWrapper from '../../../components/common/SiteWrapper';
import Resume from '../../../components/resumes/Resume';

const ResumeDisplay = () => {
    return (
        <SiteWrapper>
            <Resume company="syrinx" />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
