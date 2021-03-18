import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import Error from 'next/error';

import Resume from '../../lib/common/resume/Resume';
import ResumeModel from '../../lib/server/models/ResumeModel';

interface ResumeDisplayPageProps {
    resume: Resume;
}

export const getServerSideProps: GetServerSideProps<
    ResumeDisplayPageProps,
    { slug: string }
> = async (context) => {
    const { slug } = context?.params;

    const resume = await ResumeModel.get(slug);

    return {
        props: {
            resume
        }
    };
};

const ResumeDisplayPage: NextPage<ResumeDisplayPageProps> = ({ resume }) => {
    if (!resume) {
        return <Error statusCode={404} />;
    }

    return <div />;
};

export default ResumeDisplayPage;
