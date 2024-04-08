import { Link, NavbarItem } from "@nextui-org/react";
import React from "react";

interface NavBarItemNetworkSocialProps {
  children?: React.ReactNode;
  href: string;
}

const NavBarItemNetworkSocial: React.FC<NavBarItemNetworkSocialProps> = ({
  children,
  href,
}) => {
  return (
    <NavbarItem>
      <Link target="_blank" href={href}>
        {children}
      </Link>
    </NavbarItem>
  );
};

export default NavBarItemNetworkSocial;
