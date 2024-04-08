import React from "react";
import FooterMain from "../../components/footers/FooterMain";
import { imgsData } from "../../utils/dataImgs";
import TableTools from "../../components/tables/TableTools";
import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import TableServices from "../../components/tables/TableServices";
import TableExperience from "../../components/tables/TableExperience";
import TableEducation from "../../components/tables/TableEducation";
import { useTranslation } from "react-i18next";
import AboutButton from "../../components/Buttons/AboutButton";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex gap-14 flex-col lg:flex-row">
        <div>
          <h1 className="font-bold text-2xl">Neider urbano</h1>
          <h1 className="font-bold text-2xl text-[#666666]">
            {t("Full Stack Developer")}
          </h1>
          <p className="mt-14 text-[13pt]">{t("Profile")}</p>

          <div className="flex flex-wrap gap-4 items-center mt-7">
            <AboutButton />

            <a href="./cv-neider-urbano-es.pdf" download>
              <Button className="text-[#111]" variant="bordered">
                <FaDownload />
                {t("Dowloand")} CV
              </Button>
            </a>
          </div>
        </div>

        <img
          src={imgsData[0].url}
          alt="logo neider"
          className="rounded-lg w-full h-auto lg:w-[200px] lg:h-[200px] xl:w-[350px] xl:h-[350px]"
        />
      </div>
      <TableServices />
      <TableTools />
      <TableExperience />
      <TableEducation />
      <FooterMain />
    </div>
  );
};

export default AboutPage;
