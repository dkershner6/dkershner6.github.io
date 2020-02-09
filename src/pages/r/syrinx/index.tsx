import React from 'react';

import Layout from '../../../components/common/Layout';
import Resume from '../../../components/resumes/Resume';

const ResumeDisplay = () => {
    return (
        <Layout>
            <Resume company="syrinx" />
        </Layout>
    );
};

export default ResumeDisplay;
