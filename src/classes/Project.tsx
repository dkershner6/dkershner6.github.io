import ProjectSection from './ProjectSection';

export default class Project {
  id: string;
  name: string;
  imageSrc: string;
  heroTint: string;
  bootstrapVariant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';
  specification: string[];
  short?: boolean;
  liveExampleService?: { id: string; name: string };
  data: ProjectSection[];
  backend: ProjectSection[];
  frontend: ProjectSection[];
}
