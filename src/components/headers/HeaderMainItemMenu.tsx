import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { FaBlog, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NamesRute } from "../../models/namesRute.model";
import { FaMessage } from "react-icons/fa6";

interface HeaderMainItemMenuProps {
  nameActiveItem: string;
  setNameActiveItem: (nameActiveRute: string) => void;
}

const HeaderMainItemMenu: React.FC<HeaderMainItemMenuProps> = ({
  nameActiveItem,
  setNameActiveItem,
}) => {
  const { t } = useTranslation();

  return (
    <NavbarContent
      className="container-menu-options hidden sm:flex gap-1"
      justify="center"
    >
      <NavbarItem
        isActive={nameActiveItem === NamesRute.HOMEPAGE}
        onClick={() => setNameActiveItem(NamesRute.HOMEPAGE)}
      >
        <Link to={NamesRute.HOMEPAGE}>
          <FaHome size={"18px"} />
          <p className="sm:hidden md:block">{t("Homepage")}</p>
        </Link>
      </NavbarItem>
      <NavbarItem
        isActive={nameActiveItem === NamesRute.PROJECTS}
        onClick={() => setNameActiveItem(NamesRute.PROJECTS)}
      >
        <Link to={NamesRute.PROJECTS}>
          <FaProjectDiagram size={"18px"} />
          <p className="sm:hidden md:block">{t("Projects")}</p>
        </Link>
      </NavbarItem>
      <NavbarItem
        isActive={nameActiveItem === NamesRute.ABOUT}
        onClick={() => setNameActiveItem(NamesRute.ABOUT)}
      >
        <Link to={NamesRute.ABOUT}>
          <FaUser size={"18px"} />
          <p className="sm:hidden md:block">{t("About")}</p>
        </Link>
      </NavbarItem>
      <NavbarItem
        isActive={nameActiveItem === NamesRute.BLOG}
        onClick={() => setNameActiveItem(NamesRute.BLOG)}
      >
        <Link to={NamesRute.BLOG}>
          <FaBlog size={"18px"} />
          <p className="sm:hidden md:block">{t("Blog")}</p>
        </Link>
      </NavbarItem>
      <NavbarItem
        isActive={nameActiveItem === NamesRute.CONTACT}
        onClick={() => setNameActiveItem(NamesRute.CONTACT)}
      >
        <Link to={NamesRute.CONTACT}>
          <FaMessage size={"18px"} />
          <p className="sm:hidden md:block">{t("Contact")}</p>
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export default HeaderMainItemMenu;
