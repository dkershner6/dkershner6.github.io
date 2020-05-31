import React from 'react';

import SiteWrapper from '../../../components/common/SiteWrapper';
import Resume from '../../../components/resumes/Resume';
import properCase from '../../../utils/ProperCase';

const company = 'kollective';

const ResumeDisplay = () => {
    return (
        <SiteWrapper title={`Resume for ${properCase(company)} | DKershner.com`}>
            <Resume company={company} />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
