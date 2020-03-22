import IResumeSkill from './IResumeSkill';
import IResumeOtherSkill from './IResumeOtherSkill';
import IResumeReference from './IResumeReference';

export default interface IResume {
    company: string;
    objective: string;
    skills: IResumeSkill[];
    otherSkills: IResumeOtherSkill[];
    spaces: number[];
    references: IResumeReference[];
}
