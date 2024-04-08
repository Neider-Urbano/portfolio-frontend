export interface Project {
  id: number;
  name: string;
  description: string;
  img: string;
  link: string;
}

export type Projects = Array<Project>;
