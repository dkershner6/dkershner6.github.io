import React from 'react';

import SiteWrapper from '../../../components/common/SiteWrapper';
import Resume from '../../../components/resumes/Resume';
import properCase from '../../../utils/ProperCase';

const company = 'g5';

const ResumeDisplay = () => {
    return (
        <SiteWrapper
            title={`Resume for ${properCase(company)} | DKershner.com`}
        >
            <Resume company={company} />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
