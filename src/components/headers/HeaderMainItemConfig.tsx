import { NavbarContent, NavbarItem } from "@nextui-org/react";
import SwitcherDarkMode from "../Switchers/SwitcherDarkMode";
import SelectLenguage from "../Selects/SelectLenguage";

const HeaderMainItemConfig = () => {
  return (
    <NavbarContent className="container-config ">
      <NavbarItem>
        <SwitcherDarkMode />
      </NavbarItem>
      <NavbarItem>
        <SelectLenguage />
      </NavbarItem>
    </NavbarContent>
  );
};

export default HeaderMainItemConfig;
