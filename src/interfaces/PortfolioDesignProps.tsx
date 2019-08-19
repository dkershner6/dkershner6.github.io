import PortfolioProps from "./PortfolioProps";

export default interface PortfolioDesignSectionProps extends PortfolioProps {
  sectionId: string;
  sectionName: string;
  headerBg:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  headerText:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  getOpen: (string) => boolean;
  toggleOpen: (string) => void;
}
