import ProjectAttribute from "./ProjectAttribute";

export default class ProjectSection {
  id: string;
  name: string;
  attributes: ProjectAttribute[];
  reasons: string[];
}
