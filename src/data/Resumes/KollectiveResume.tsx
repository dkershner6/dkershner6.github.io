import makeRange from '../../utils/MakeRange';
import Resume from '../../classes/Resume';

const kollectiveResume: Resume = {
  company: 'kollective',
  objective:
    'Experienced Full-Stack Software Developer, DevOps Practitioner, and Cloud Architect with an unending thirst for learning, is seeking new challenges and experiences to broaden his depth of knowledge.',
  skills: [
    {
      name: 'Back-End',
      bolded: true,
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
    {
      name: 'Deployment / DevOps',
      bolded: true,
      subSkills: [
        {
          name: 'Azure DevOps / VSTS',
          score: 5,
          link: 'https://azure.microsoft.com/en-us/services/devops/',
        },
        {
          name: 'Kubernetes / Docker',
          bolded: true,
          score: 4,
          link: 'https://kubernetes.io/',
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
          bolded: false,
          score: 2,
          link: 'https://aws.amazon.com/',
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
      bolded: true,
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
      bolded: true,
    },
    {
      name: 'Data Analysis / Big Data',
      bolded: false,
    },
    {
      name: 'User Interface Design',
      bolded: true,
    },
    {
      name: 'Git / Version Control',
      bolded: false,
    },
    {
      name: 'Server Administration (Win & Linux)',
      bolded: true,
    },
    {
      name:
        'Unit & Integration Testing (For all back-end frameworks listed above)',
      bolded: true,
    },
    {
      name:
        'Asynchronous Programming (For all front-end and back-end frameworks above)',
      bolded: true,
    },
  ],

  spaces: makeRange(0, 7),
  references: [],
};

export default kollectiveResume;
