import React from 'react';

import SiteWrapper from '../../../src/components/common/SiteWrapper';
import Resume from '../../../src/components/resumes/Resume';
import properCase from '../../../src/utils/ProperCase';

const company = 'kollective';

const ResumeDisplay = () => {
    return (
        <SiteWrapper title={`Resume for ${properCase(company)} | DKershner.com`}>
            <Resume company={company} />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
