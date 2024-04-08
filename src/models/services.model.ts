import { IconType } from "react-icons";

export interface Service {
  id: number;
  icon: IconType | string;
  name: string;
}

export type Services = Array<Service>;
