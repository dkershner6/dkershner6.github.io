import Project from "../../classes/Project";

import enterpriseMarketplaceProject from "./projects/EnterpriseMarketplace";
import shopifySearchEngineProject from "./projects/ShopifySearchEngine";

export const projects: Project[] = [
  enterpriseMarketplaceProject,
  shopifySearchEngineProject
];

const getProject = projectId => {
  const projArray = projects.filter(p => p.id === projectId);
  if (projArray !== undefined && projArray.length > 0) {
    return projArray[0];
  } else {
    return undefined;
  }
};

export default getProject;
