import IProject from './Project/IProject';

export default interface IPortfolio {
    key?: number;
    menu: boolean;
    project: IProject;
}
