import IPortfolio from './IPortfolio';

export default interface IPortfolioDesignSection extends IPortfolio {
    sectionId: string;
    sectionName: string;
    headerBg: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    headerText: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
}
