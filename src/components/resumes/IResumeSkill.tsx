import ResumeSubskill from './IResumeSubskill';

export default interface IResumeSkill {
    name: string;
    bolded?: boolean;
    subSkills: ResumeSubskill[];
}
