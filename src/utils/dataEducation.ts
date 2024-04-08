import { Educations } from "../models/educations.model";

enum TipeEducation {
  Virtual = "Virtual",
  InPerson = "In Person",
}

export const dataEducations: Educations = [
  {
    id: 1,
    dateFinish: "2022",
    school: "Henry Bootcamp",
    course: "Full Stack Developer",
    description: TipeEducation.Virtual,
  },
  {
    id: 2,
    dateFinish: "2022",
    school: "Uniremington",
    course: "Systems Engineer",
    description: TipeEducation.InPerson,
  },
  {
    id: 3,
    dateFinish: "2017",
    school: "ITEIPA",
    course: "Technical Bachelor",
    description: TipeEducation.InPerson,
  },
];
