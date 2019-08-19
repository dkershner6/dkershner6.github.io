import Technology from '../classes/Technology';
import technologiesJs, {
  backendTechnologies as backendTechnologiesJs,
  frontendTechnologies as frontendTechnologiesJs,
  deploymentTechnologies as deploymentTechnologiesJs,
  dataTechnologies as dataTechnologiesJs,
  clouds as cloudsJs,
} from './technologies-node';

export const backendTechnologies: Technology[] = backendTechnologiesJs;
export const frontendTechnologies: Technology[] = frontendTechnologiesJs;
export const deploymentTechnologies: Technology[] = deploymentTechnologiesJs;
export const dataTechnologies: Technology[] = dataTechnologiesJs;
export const clouds: Technology[] = cloudsJs;
export const technologies: Technology[] = technologiesJs;

export default technologies;
