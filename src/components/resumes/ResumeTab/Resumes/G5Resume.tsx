import makeRange from '../../../../utils/MakeRange';
import IResume from '../../IResume';

const g5Resume: IResume = {
    company: 'g5',
    objective:
        'Data Analyst turned Software Developer with an unending thirst for learning, is seeking new challenges and experiences to broaden his depth of knowledge.',
    skills: [
        {
            name: 'Data-Related Languages',
            subSkills: [
                {
                    name: 'JS',
                    bolded: true,
                    score: 5,
                    link: 'https://js.org/',
                },
                {
                    name: 'Python',
                    bolded: true,
                    score: 3,
                    link: 'https://www.typescriptlang.org/',
                },
                {
                    name: 'C#',
                    score: 5,
                    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
                },
            ],
        },
        {
            name: 'Data Structures',
            subSkills: [
                {
                    name: 'SQL (MS & My)',
                    bolded: true,
                    score: 5,
                },
                {
                    name: 'JSON (Various)',
                    score: 5,
                },
                {
                    name: 'Key-Value (Various)',
                    score: 5,
                },
            ],
        },
        {
            name: 'Front-End',
            subSkills: [
                {
                    name: 'React / JS',
                    score: 5,
                    link: 'https://reactjs.org/',
                },
                {
                    name: 'TypeScript / JS',
                    bolded: false,
                    score: 5,
                    link: 'https://www.typescriptlang.org/',
                },
            ],
        },
        {
            name: 'Back-End',
            subSkills: [
                {
                    name: 'ASP.Net Core / C#',
                    score: 5,
                    link: 'https://dotnet.microsoft.com/apps/aspnet',
                },
                {
                    name: 'Node / JS',
                    score: 4,
                    link: 'https://nodejs.org/en/',
                },
                {
                    name: 'Flask / Python',
                    score: 3,
                    link: 'https://www.python.org/',
                },
            ],
        },
    ],
    otherSkills: [
        {
            name: 'Application Design / Microservices',
        },
        {
            name: 'Serverless Functions',
        },
        {
            name: 'RESTful APIs - Build / Consume',
            bolded: false,
        },
        {
            name: 'Project Planning & Management / Agile',
            bolded: true,
        },
        {
            name: 'Entity Framework / SQL / RDBMS',
            bolded: true,
        },
        {
            name: 'NoSQL / JSON',
            bolded: false,
        },
        {
            name: 'Continuous Integration / Continuous Deployment',
            bolded: false,
        },
        {
            name: 'Search Engine Optimization',
            bolded: false,
        },
        {
            name: 'Data Analysis / Big Data / Machine Learning',
            bolded: true,
        },
        {
            name: 'User Interface Design',
            bolded: false,
        },
        {
            name: 'Git / Version Control',
            bolded: false,
        },
        {
            name: 'Server Administration',
            bolded: false,
        },
    ],
    spaces: makeRange(0, 11),
    references: [
        {
            name: 'Andrew Warren',
            link: 'https://www.linkedin.com/in/andrew-warren-b33a7685/',
            description: 'Manager, Website Implementation at G5',
        },
    ],
};

export default g5Resume;
