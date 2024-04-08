import { Link } from "react-router-dom";
import { NamesRute } from "../../models/namesRute.model";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const AboutButton = () => {
  const { t } = useTranslation();

  return (
    <Link to={NamesRute.ABOUT}>
      <Button color="default" className="hover:bg-[#18191B]">
        {t("About")}
      </Button>
    </Link>
  );
};

export default AboutButton;
