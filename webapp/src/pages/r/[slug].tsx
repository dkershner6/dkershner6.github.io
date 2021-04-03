import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import Error from 'next/error';

import ResumeDisplay from '../../components/ResumeDisplay';
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

    if (context.query.password === process.env.SECRET_PASSWORD) {
        return {
            props: {
                resume: {
                    ...resume,
                    resume: {
                        ...resume.resume,
                        basics: {
                            ...resume.resume.basics,
                            email: process.env.RESUME_EMAIL,
                            phone: process.env.RESUME_PHONE,
                            location: {
                                ...resume.resume.basics.location,
                                address: process.env.RESUME_ADDRESS
                            }
                        }
                    }
                }
            }
        };
    }

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

    return <ResumeDisplay resume={resume} />;
};

export default ResumeDisplayPage;
