import { technologies } from '../data/technologies-node';
import Technology from './Technology';

export default class ProjectAttribute {
    name: string;
    value: string;
    link?: string;
}

export const createAttributeFromTechnology = (technologyId: string) => {
    const tempTechnologies = technologies.filter(technology => technology.id === technologyId);
    if (tempTechnologies.length > 0) {
        const technology = tempTechnologies[0];
        const attribute = new ProjectAttribute();
        if (technology.type === 'deployment') {
            attribute.name = 'Deployment';
        } else {
            attribute.name = 'Technology';
        }

        attribute.value = technology.label;
        attribute.link = `/technologies/${technology.type}/${technology.id}`;
        return attribute;
    } else {
        console.warn(technologyId + ' undefined?');
        return undefined;
    }
};

export const getTechnologiesFromAttributes = (attributes: ProjectAttribute[]): Technology[] => {
    const returnTechnologies = [];

    attributes.forEach(attribute => {
        const tempTechs = technologies.filter(technology => technology.label === attribute.value);
        if (tempTechs.length > 0) {
            returnTechnologies.push(...tempTechs);
        }
    });

    return returnTechnologies;
};
