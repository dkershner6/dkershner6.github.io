import inseegoResume from "./InseegoResume";
import kollectiveResume from "./KollectiveResume";

const resumes = [inseegoResume, kollectiveResume];

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
