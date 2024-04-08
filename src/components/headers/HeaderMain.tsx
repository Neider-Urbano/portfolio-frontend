import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import "./style.css";
import { FaBlog, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { imgsData } from "../../utils/dataImgs";
import { FaMessage } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NamesRute } from "../../models/namesRute.model";
import NavBarItemsNetworkSocial from "./NavBarItemsNetworkSocial";
import HeaderMainItemMenu from "./HeaderMainItemMenu";
import HeaderMainItemConfig from "./HeaderMainItemConfig";

const IconsOptions = [
  {
    id: 1,
    icon: <FaHome size={"18px"} />,
  },
  {
    id: 2,
    icon: <FaProjectDiagram size={"18px"} />,
  },
  {
    id: 3,
    icon: <FaUser size={"18px"} />,
  },
  {
    id: 4,
    icon: <FaBlog size={"18px"} />,
  },
  {
    id: 5,
    icon: <FaMessage size={"18px"} />,
  },
];

export const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Homepage", "Projects", "About", "Blog", "Contact"];
  const { t } = useTranslation();
  const [nameActiveItem, setNameActiveItem] = useState<string>(
    NamesRute.HOMEPAGE
  );
  const location = useLocation();

  useEffect(() => {
    setNameActiveItem(location.pathname);
  }, []);

  function itemParser(item: string): string {
    return item === "Homepage" ? "/" : "/" + item.toLowerCase();
  }

  function validActiveItem(item: string): string {
    if (item === "Homepage") {
      return nameActiveItem === "/" ? "isActivePhone" : "";
    }
    return nameActiveItem === "/" + item.toLowerCase() ? "isActivePhone" : "";
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="class-header bg-[#EEEEEE] dark:bg-[#141414]  sm:w-[100px] md:w-[250px]"
    >
      <NavbarContent className="grow">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-[#999999] sm:hidden"
        />
        <NavbarBrand className="container-logo-neider">
          <img
            alt="Neider Foto"
            src={imgsData[0].url}
            className="h-[45px] w-[45px] rounded-md sm:h-[60px] sm:w-[60px]"
          />
          <div className="hidden md:text-center">
            <p className="text-[11pt] text-[#111111] font-medium md:text-[12pt] dark:text-[#ffff]">
              Neider Urbano
            </p>
            <p className="text-[10.5pt] text-[#666666] font-medium md:text-[11pt] dark:text-[#aeaeae]">
              {t("Full Stack Developer")}
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="container-redes-sociales hidden"
        justify="center"
      >
        <NavBarItemsNetworkSocial />
      </NavbarContent>

      <HeaderMainItemMenu
        nameActiveItem={nameActiveItem}
        setNameActiveItem={setNameActiveItem}
      />

      <HeaderMainItemConfig />

      <NavbarMenu className="container-menu-desplegable bg-[#EEEEEE] border-2 border-t-[#DEDFE1] border-r-0 border-l-0 border-b-0 pt-[50px] dark:bg-[#141414] dark:border-t-[#222222] ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={item}
            className={validActiveItem(item)}
            onClick={() => setNameActiveItem(itemParser(item))}
          >
            <Link className="w-full" to={itemParser(item)}>
              {IconsOptions[index].icon}
              {t(item)}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarContent className="container-redes-sociales-desplegable ">
          <NavBarItemsNetworkSocial />
        </NavbarContent>
      </NavbarMenu>
    </Navbar>
  );
};
