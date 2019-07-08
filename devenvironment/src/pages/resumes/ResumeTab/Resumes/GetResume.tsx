import inseegoResume from "./InseegoResume";
import kollectiveResume from "./KollectiveResume";
import g5Resume from "./G5Resume";

const resumes = [inseegoResume, kollectiveResume, g5Resume];

const getResume = (company: string) => {
  let returnResume = resumes.filter(resume => resume.company === company);
  console.log(returnResume);
  if (returnResume.length === 1) {
    return returnResume[0];
  } else {
    return null;
  }
};

export default getResume;
