export interface Experience {
  id: number;
  dateInit: string;
  yearInit: number;
  dateFinish: string;
  yearFinish?: number;
  company: string;
  rol: string;
  functions: string;
}

export type Experiences = Array<Experience>;
