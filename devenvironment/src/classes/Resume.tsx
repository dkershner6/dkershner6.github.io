import ResumeSkill from "./ResumeSkill";
import ResumeOtherSkill from "./ResumeOtherSkill";
import ResumeReference from "./ResumeReference";

export default class Resume {
  company: string;
  objective: string;
  skills: ResumeSkill[];
  otherSkills: ResumeOtherSkill[];
  spaces: number[];
  references: ResumeReference[];
}
