import Project from '../../classes/Project';

import CodeChallenge from '../../classes/CodeChallenge';
import { technologies } from '../technologies';

const codeChallengesProject: Project = {
  id: 'codeChallenges',
  name: 'Code Challenges',
  imageSrc: '/img/laboratory.jpg',
  heroTint: '#17004a',
  bootstrapVariant: 'info',
  specification: [
    'These are generally tests handed out by interviewers to test coding prowess and vary widely.',
  ],
  short: true,
  data: [],
  backend: [],
  frontend: [],
};

export const codeChallenges: CodeChallenge[] = [
  {
    name: 'Automated Minesweeper',
    link: 'https://github.com/dkershner6/AutomatedMinesweeper',
    technology: technologies.filter(
      technology => technology.id === 'aspNetCore',
    )[0],
    background:
      'There are bunch of mines in a mine field, and you are tasked with exploding as many of them as you can. The only caveat is you can only explode one manually. The mine you manually explode will set off a chain reaction. For any mine that explodes, all mines within the blast radius of that mine will be triggered to explode in one second. The mine you manually explode blows up at time 0.',
    task:
      'Write a program which will read in a mines array and output the maximum number of mines you can explode. Also output which mine you need to manually set off to explode this maximum number. Since there may be multiple mines that blow up a maximal number of mines you should output all the mines that do that.',
  },
];

export default codeChallengesProject;
