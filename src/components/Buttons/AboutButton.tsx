import { Link } from "react-router-dom";
import { NamesRute } from "../../models/namesRute.model";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const AboutButton = () => {
  const { t } = useTranslation();

  return (
    <Link to={NamesRute.ABOUT}>
      <Button
        color="default"
        className="hover:bg-[#18191B] dark:bg-[#4C4C4C] dark:hover:bg-[#4444]"
      >
        {t("About")}
      </Button>
    </Link>
  );
};

export default AboutButton;
