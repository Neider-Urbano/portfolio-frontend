import { FaAngular, FaNode, FaReact } from "react-icons/fa";
import { Tools } from "../models/tools.model";
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

export const dataTools: Tools = [
  { id: 1, icon: FaReact, skill: "React", porcentaje: "80" },
  { id: 2, icon: FaAngular, skill: "Angular", porcentaje: "50" },
  { id: 3, icon: SiTailwindcss, skill: "Tailwind", porcentaje: "70" },
  { id: 4, icon: FaNode, skill: "Node", porcentaje: "80" },
  { id: 5, icon: SiExpress, skill: "Express", porcentaje: "75" },
  { id: 6, icon: SiSpringboot, skill: "Springboot", porcentaje: "60" },
  { id: 7, icon: SiMysql, skill: "Mysql", porcentaje: "80" },
  { id: 8, icon: SiPostgresql, skill: "Postgresql", porcentaje: "70" },
  { id: 9, icon: SiMongodb, skill: "Mongobd", porcentaje: "70" },
  { id: 10, icon: SiGithub, skill: "Github", porcentaje: "70" },
  { id: 11, icon: SiDocker, skill: "Docker", porcentaje: "70" },
  { id: 12, icon: SiGraphql, skill: "Graphql", porcentaje: "70" },
];
