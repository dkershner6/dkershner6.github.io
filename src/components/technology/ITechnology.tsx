import IProject from '../portfolio/Project/IProject';
import IProjectAttribute from '../portfolio/Project/IProjectAttribute';
import IProjectSection from '../portfolio/Project/IProjectSection';
import { projects } from '../../data/Projects';
//import posts from "../pages/blog/Posts";
import technologies from '../../data/Technologies';

interface IProjectSummary {
    id: string;
    name: string;
    uses: number;
}

export default class ITechnology {
    id: string;
    label: string;
    type: string;
    language?: string;
    familiarity: number;
    link?: string;
}

export const getTechnologyById = (technologyId: string) => {
    const tempTechs = technologies.filter((technology) => technology.id === technologyId);
    if (tempTechs.length > 0) {
        return tempTechs[0];
    } else {
        return undefined;
    }
};

export const getProjectsForTechnology = (technology: ITechnology): IProjectSummary[] => {
    const searchProjectSection = (projectSectionName: string, project: IProject): number => {
        let projectSectionUses = 0;
        project[projectSectionName].forEach((projectSection: IProjectSection) => {
            const attributes = projectSection.attributes.filter((attribute: IProjectAttribute) => attribute.value === technology?.label);

            if (attributes.length > 0) {
                projectSectionUses = projectSectionUses + attributes.length;
            }
        });

        return projectSectionUses;
    };
    const returnObj = [];
    projects.forEach((project: IProject) => {
        let projectUses = 0;
        if (project[technology?.type] !== undefined) {
            projectUses = projectUses + searchProjectSection(technology.type, project);
        } else {
            const projectSections = ['backend', 'frontend'];
            projectSections.forEach((projectSection) => (projectUses = projectUses + searchProjectSection(projectSection, project)));
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

export const internalLink = (technology: ITechnology) => {
    return `/technologies/${technology.type}/${technology.id}`;
};
