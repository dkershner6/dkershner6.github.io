import makeRange from '../../utils/MakeRange';
import Resume from '../../classes/Resume';

const fiveTalentResume: Resume = {
  company: 'fiveTalent',
  objective:
    'Experienced Full-Stack Software Developer, DevOps Practitioner, and Cloud Architect with an unending thirst for learning, is seeking new challenges and experiences to broaden his depth of knowledge.',
  skills: [
    {
      name: 'Front-End',
      subSkills: [
        {
          name: 'React / JS',
          bolded: true,
          score: 5,
          link: 'https://reactjs.org/',
        },
        {
          name: 'TypeScript / JS',
          bolded: true,
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
          bolded: true,
          score: 5,
          link: 'https://dotnet.microsoft.com/apps/aspnet',
        },
        {
          name: 'Node / JS',
          bolded: true,
          score: 3,
          link: 'https://nodejs.org/en/',
        },
        {
          name: 'Flask / Python',
          bolded: true,
          score: 3,
          link: 'https://www.python.org/',
        },
      ],
    },
    {
      name: 'Clouds',
      subSkills: [
        {
          name: 'Azure',
          score: 5,
          link: 'https://azure.microsoft.com/en-us/',
        },
        {
          name: 'Google',
          bolded: false,
          score: 3,
          link: 'https://cloud.google.com/',
        },
        {
          name: 'AWS',
          bolded: true,
          score: 2,
          link: 'https://aws.amazon.com/',
        },
      ],
    },
    {
      name: 'Deployment / DevOps',
      bolded: false,
      subSkills: [
        {
          name: 'Azure DevOps / VSTS',
          score: 5,
          link: 'https://azure.microsoft.com/en-us/services/devops/',
        },
        {
          name: 'Kubernetes / Docker',
          score: 4,
          link: 'https://kubernetes.io/',
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
      bolded: true,
    },
    {
      name:
        'Continuous Integration / Continuous Deployment / Infrastructure as Code',
      bolded: false,
    },
    {
      name: 'Search Engine Optimization',
      bolded: false,
    },
    {
      name: 'Data Analysis / Big Data',
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
      name: 'Meg Chun',
      link: 'https://www.linkedin.com/in/meg-chun-91750427/',
      description: 'Brand Marketing Manager at KIALOA Paddles',
    },
  ],
};

export default fiveTalentResume;
