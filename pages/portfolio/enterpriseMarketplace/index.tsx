import React from 'react';

import Portfolio from '../../../src/components/portfolio/Portfolio';
import SiteWrapper from '../../../src/components/common/SiteWrapper';

const EnterpriseMarketplace = () => {
    return (
        <SiteWrapper title={'Enterprise Marketplace'}>
            <Portfolio projectName="enterpriseMarketplace" />
        </SiteWrapper>
    );
};

export default EnterpriseMarketplace;
