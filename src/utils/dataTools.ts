import {
  SiAsana,
  SiHtml5,
  SiMysql,
  SiDocker,
  SiGithub,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiVuedotjs,
  SiPostgresql,
  SiTypescript,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { Tools } from "../models/tools.model";
import { FaAngular, FaNode, FaReact } from "react-icons/fa";

export const dataTools: Tools = [
  { id: 1, icon: FaReact, skill: "React", porcentaje: "80" },
  { id: 2, icon: FaAngular, skill: "Angular", porcentaje: "50" },
  { id: 3, icon: SiTailwindcss, skill: "Tailwind", porcentaje: "70" },
  { id: 4, icon: FaNode, skill: "Node", porcentaje: "80" },
  { id: 5, icon: SiExpress, skill: "Express", porcentaje: "75" },
  { id: 6, icon: SiSpringboot, skill: "Spring Boot", porcentaje: "60" },
  { id: 7, icon: SiMysql, skill: "Mysql", porcentaje: "80" },
  { id: 8, icon: SiPostgresql, skill: "Postgresql", porcentaje: "70" },
  { id: 9, icon: SiMongodb, skill: "Mongo Db", porcentaje: "70" },
  { id: 10, icon: SiGithub, skill: "Github", porcentaje: "70" },
  { id: 11, icon: SiDocker, skill: "Docker", porcentaje: "70" },
  { id: 12, icon: SiGraphql, skill: "Graphql", porcentaje: "70" },
  { id: 13, icon: SiTypescript, skill: "Typescript", porcentaje: "90" },
  { id: 14, icon: SiVuedotjs, skill: "Vue Js", porcentaje: "80" },
  { id: 15, icon: SiAsana, skill: "Asana", porcentaje: "90" },
  { id: 16, icon: SiHtml5, skill: "HTML 5", porcentaje: "90" },
];
