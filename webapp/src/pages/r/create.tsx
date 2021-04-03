import React from 'react';

import { NextPage } from 'next';

import Layout from '../../components/common/Layout';
import ResumeForm from '../../components/ResumeForm';

const ResumeCreatePage: NextPage = () => {
    return (
        <Layout>
            <ResumeForm />
        </Layout>
    );
};

export default ResumeCreatePage;
