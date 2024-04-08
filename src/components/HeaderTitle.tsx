import React from "react";
import { useTranslation } from "react-i18next";

interface HeaderTitleProps {
  title: string;
  description?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-20">
      <h1 className="text-[#111] font-semibold text-xl dark:text-[#ffff]">
        {t(title)}
      </h1>
      <p className="text-[#666666] font-normal text-lg dark:text-[#a3a3a3]">
        {t(description)}
      </p>
    </div>
  );
};

export default HeaderTitle;
