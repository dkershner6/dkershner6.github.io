import IResume from '../../IResume';

import inseegoResume from './InseegoResume';
import kollectiveResume from './KollectiveResume';
import g5Resume from './G5Resume';
import devotedHealthResume from './DevotedHealthResume';
import fiveTalentResume from './FiveTalentResume';
import cbtNuggetsResume from './CBTNuggetsResume';
import titanResume from './TitanResume';
import pollyResume from './PollyResume';
import syrinxResume from './SyrinxResume';

export const resumes: IResume[] = [
    inseegoResume,
    kollectiveResume,
    g5Resume,
    devotedHealthResume,
    fiveTalentResume,
    cbtNuggetsResume,
    titanResume,
    pollyResume,
    syrinxResume,
];

const getResume = (company: string) => {
    const returnResume = resumes.filter(resume => resume.company === company);
    console.log(returnResume);
    if (returnResume.length === 1) {
        return returnResume[0];
    } else {
        return null;
    }
};

export default getResume;
