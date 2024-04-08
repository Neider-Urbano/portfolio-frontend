import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import ProjectsList from "../../components/lists/ProjectsList";
import FooterMain from "../../components/footers/FooterMain";
import BlogsList from "../../components/lists/BlogsList";
import FamousPhrases from "../../components/FamousPhrases";
import { useTranslation } from "react-i18next";
import AboutButton from "../../components/Buttons/AboutButton";
import CopyEmailButton from "../../components/Buttons/CopyEmailButton";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div>
          <h1 className="text-[#111] font-semibold text-2xl dark:text-[#ffff]">
            {t("Hello")} {t("Am")} Neider 👏
          </h1>
          <h2 className="text-[#666666] font-semibold text-2xl dark:text-[#a3a3a3]">
            {t("Full Stack Developer")}
          </h2>
        </div>

        <div className="my-[30px] flex items-center gap-1">
          <BiLocationPlus color="#A15830 " />
          <p className="text-[#A15830] pt-1 ">Paz de Ariporo, Casanare</p>
        </div>

        <p className="text-left my-[30px] text-[#666666] dark:text-[#aeaeae]">
          {t("Profile")}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <AboutButton />
          <CopyEmailButton />
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-[#111111] font-medium text-lg mb-6 ml-1 dark:text-[#ffff]">
          {t("Developed Projects")}
        </h1>
        <ProjectsList />
      </div>

      <div className="mt-24">
        <h1 className="text-[#111111] font-medium text-lg mb-6 ml-1 dark:text-[#ffff]">
          {t("Recommended Blogs")}
        </h1>
        <BlogsList />
      </div>

      <div className="mt-24">
        <h1 className="text-[#111111] font-medium text-lg mb-6 ml-1 dark:text-[#ffff]">
          {t("Famous Phrases")}
        </h1>
        <FamousPhrases />
      </div>

      <FooterMain />
    </>
  );
};

export default HomePage;
