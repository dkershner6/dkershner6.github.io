import { technologies } from '../../../data/technologiesData';
import ITechnology from '../../technology/ITechnology';

export default interface IProjectAttribute {
    name: string;
    value: string;
    link?: string;
}

export const createAttributeFromTechnology = (technologyId: string): IProjectAttribute => {
    const tempTechnologies = technologies.filter((technology) => technology.id === technologyId);
    if (tempTechnologies.length > 0) {
        const technology = tempTechnologies[0];
        const attribute: IProjectAttribute = {
            name: technology.type === 'deployment' ? 'Deployment' : 'Technology',
            value: technology.label,
            link: `/technologies/${technology.type}/${technology.id}`
        };

        return attribute;
    } else {
        console.warn(technologyId + ' undefined?');
        return undefined;
    }
};

export const getTechnologiesFromAttributes = (attributes: IProjectAttribute[]): ITechnology[] => {
    const returnTechnologies = [];

    attributes.forEach((attribute) => {
        const tempTechs = technologies.filter((technology) => technology.label === attribute.value);
        if (tempTechs.length > 0) {
            returnTechnologies.push(...tempTechs);
        }
    });

    return returnTechnologies;
};
