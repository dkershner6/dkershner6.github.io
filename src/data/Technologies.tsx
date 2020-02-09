import ITechnology from '../components/technology/ITechnology';
import technologiesJs, {
    backendTechnologies as backendTechnologiesJs,
    frontendTechnologies as frontendTechnologiesJs,
    deploymentTechnologies as deploymentTechnologiesJs,
    dataTechnologies as dataTechnologiesJs,
    clouds as cloudsJs,
} from './technologies-node';

export const backendTechnologies: ITechnology[] = backendTechnologiesJs;
export const frontendTechnologies: ITechnology[] = frontendTechnologiesJs;
export const deploymentTechnologies: ITechnology[] = deploymentTechnologiesJs;
export const dataTechnologies: ITechnology[] = dataTechnologiesJs;
export const clouds: ITechnology[] = cloudsJs;
export const technologies: ITechnology[] = technologiesJs;

export default technologies;
