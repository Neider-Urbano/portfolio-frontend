import { IconType } from "react-icons";

export interface Tool {
  id: number;
  icon: IconType;
  skill: string;
  porcentaje: string;
}

export type Tools = Array<Tool>;
