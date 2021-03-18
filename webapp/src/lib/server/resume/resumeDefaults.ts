import { GITHUB_URL, LINKEDIN_URL } from '../../common/personalConstants';
import { JsonResume } from '../../common/resume/JsonResume';

const resumeDefaults: JsonResume = {
    basics: {
        name: 'Derek Kershner',
        label: 'Software Architect',
        email: process.env.RESUME_EMAIL,
        phone: process.env.RESUME_PHONE,
        url: 'https://dkershner.com',
        location: {
            address: process.env.RESUME_ADDRESS,
            city: 'Bend',
            region: 'Oregon',
            postalCode: '97701',
            countryCode: 'US'
        },
        profiles: [
            {
                network: 'LinkedIn',
                url: LINKEDIN_URL
            },
            {
                network: 'GitHub',
                username: 'dkershner6',
                url: GITHUB_URL
            }
        ]
    },
    work: [
        {
            name: 'CBT Nuggets',
            location: 'Bend, OR',
            summary:
                'Rapidly moved from Engineering to Architecture and vastly increased responsibility and decision scope within 6 months. Thoroughly enjoy using and developing e-learning software.',
            position: 'Software Architect',
            startDate: 'August 2019',
            endDate: 'Present'
        },
        {
            name: 'eFormed Partners',
            location: 'Bend, OR',
            summary:
                'Manage all technology projects and personnel. Architect software designs in the cloud for maximum reliability and scalability. Oversee code and deployment, monitor results, availability, performance.',
            position: 'Partner - Head of Software & IT',
            startDate: 'September 2014',
            endDate: 'August 2019'
        },
        {
            name: 'Altrec.com',
            location: 'Redmond, OR',
            summary:
                'Manage Business Analytics and Marketing teams. Advise Senior Management with data-backed recommendations.',
            position: 'Director of Business Analytics',
            startDate: 'November 2006',
            endDate: 'September 2014'
        }
    ],
    volunteer: [
        {
            organization:
                'Empire Crossing Home Owners Association Architectural Review',
            position: 'Chairman',
            summary:
                'I oversee the team that approves or denies all applications for changes for the Empire Crossing Neioghborhoods in Northeast Bend, Oregon.',
            startDate: 'June 2009',
            endDate: 'November 2015'
        }
    ],
    education: [
        {
            institution:
                'University of Oregon - Charles H. Lundquist College of Business',
            area: 'Business',
            studyType:
                'Bachelors of Science - Business Administration, Finance, Marketing',
            startDate: 'September 2001',
            endDate: 'June 2005'
        }
    ]
};

export default resumeDefaults;
