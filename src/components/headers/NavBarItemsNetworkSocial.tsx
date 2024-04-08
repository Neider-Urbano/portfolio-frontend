import { redesData } from "../../utils/dataRedes";
import NavBarItemNetworkSocial from "./NavBarItemNetworkSocial";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const NavBarItemsNetworkSocial = () => {
  return (
    <>
      <NavBarItemNetworkSocial href={redesData[0].href}>
        <FaLinkedin size={"23px"} />
      </NavBarItemNetworkSocial>
      <NavBarItemNetworkSocial href={redesData[1].href}>
        <FaGithub size={"23px"} />
      </NavBarItemNetworkSocial>
      <NavBarItemNetworkSocial href={redesData[2].href}>
        <FaYoutube size={"23px"} />
      </NavBarItemNetworkSocial>
    </>
  );
};

export default NavBarItemsNetworkSocial;
