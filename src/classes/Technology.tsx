import Project from "./Project";
import ProjectAttribute from "./ProjectAttribute";
import ProjectSection from "./ProjectSection";
import { projects } from "../data/Projects";
//import posts from "../pages/blog/Posts";
import technologies from "../data/Technologies";
import Post from "./Post";

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
  const searchProjectSection = (
    projectSectionName: string,
    project: Project
  ): number => {
    let projectSectionUses = 0;
    project[projectSectionName].forEach((projectSection: ProjectSection) => {
      let attributes = projectSection.attributes.filter(
        (attribute: ProjectAttribute) => attribute.value === technology.label
      );

      if (attributes.length > 0) {
        projectSectionUses = projectSectionUses + attributes.length;
      }
    });

    return projectSectionUses;
  };
  let returnObj = [];
  projects.forEach((project: Project) => {
    let projectUses = 0;
    if (project[technology.type] !== undefined) {
      projectUses =
        projectUses + searchProjectSection(technology.type, project);
    } else {
      let projectSections = ["backend", "frontend"];
      projectSections.forEach(
        projectSection =>
          (projectUses =
            projectUses + searchProjectSection(projectSection, project))
      );
    }

    if (projectUses > 0) {
      returnObj.push({
        id: project.id,
        name: project.name,
        uses: projectUses
      });
    }
  });
  return returnObj;
};

/*export const getPostsForTechnology = (technology: Technology): Post[] => {
  return posts.filter(post => post.technologyIds.includes(technology.id));
};*/

export const internalLink = (technology: Technology) => {
  return `/technologies/${technology.type}/${technology.id}`;
};
