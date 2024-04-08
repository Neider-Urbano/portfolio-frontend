export interface Education {
  id: number;
  dateFinish: string;
  school: string;
  course: string;
  description: string;
}

export type Educations = Array<Education>;
