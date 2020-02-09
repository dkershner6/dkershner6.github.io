import React from 'react';

import SiteWrapper from '../../../components/common/SiteWrapper';
import Resume from '../../../components/resumes/Resume';

const ResumeDisplay = () => {
    return (
        <SiteWrapper>
            <Resume company="cbtNuggets" />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
