import Project from "./Project";
import ProjectAttribute from "./ProjectAttribute";
import ProjectSection from "./ProjectSection";
import { projects } from "../pages/portfolio/Projects";
import technologies from "../pages/technologies/Technologies";

class ProjectSummary {
  id: string;
  name: string;
  uses: number;
}

export default class Technology {
  id: string;
  label: string;
  type: "backend" | "frontend" | "data" | "deployment" | "cloud";
  language?: string;
  familiarity: number;
  link?: string;
}

export const getTechnologyById = (technologyId: string) => {
  let tempTechs = technologies.filter(
    technology => technology.id === technologyId
  );
  if (tempTechs.length > 0) {
    return tempTechs[0];
  } else {
    return undefined;
  }
};

export const getProjectsForTechnology = (
  technology: Technology
): ProjectSummary[] => {
  let returnObj = [];
  projects.forEach((project: Project) => {
    let projectUses = 0;
    if (project[technology.type] !== undefined) {
      project[technology.type].forEach((projectSection: ProjectSection) => {
        let attributes = projectSection.attributes.filter(
          (attribute: ProjectAttribute) => attribute.value === technology.label
        );

        if (attributes.length > 0) {
          projectUses = projectUses + attributes.length;
        }
      });

      if (projectUses > 0) {
        returnObj.push({
          id: project.id,
          name: project.name,
          uses: projectUses
        });
      }
    }
  });
  return returnObj;
};

export const internalLink = (technology: Technology) => {
  return `/technologies/${technology.type}/${technology.id}`;
};
