import IProjectAttribute from './IProjectAttribute';

export default interface IProjectSection {
    id: string;
    name: string;
    attributes: IProjectAttribute[];
    reasons: string[];
}
