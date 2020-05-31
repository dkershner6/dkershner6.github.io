import IProject from '../components/portfolio/Project/IProject';

import enterpriseMarketplaceProject from './projects/EnterpriseMarketplace';
import shopifySearchEngineProject from './projects/ShopifySearchEngine';
import codeChallengesProject from './projects/CodeChallenges';

const projects: IProject[] = [
    codeChallengesProject,
    enterpriseMarketplaceProject,
    shopifySearchEngineProject
];

const getProject = (projectId) => {
    const projArray = projects.filter((p) => p.id === projectId);
    if (projArray !== undefined && projArray.length > 0) {
        return projArray[0];
    } else {
        return undefined;
    }
};

export default getProject;
export { projects };
