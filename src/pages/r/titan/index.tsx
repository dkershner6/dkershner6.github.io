import React from 'react';

import Layout from '../../../components/Layout';
import Resume from '../../../components/resumes/Resume';

const ResumeDisplay = () => {
  return (
    <Layout>
      <Resume company='titan' />
    </Layout>
  );
};

export default ResumeDisplay;
