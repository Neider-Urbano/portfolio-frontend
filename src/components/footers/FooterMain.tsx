import { useTranslation } from "react-i18next";

const FooterMain = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-32">
      <hr className="dark:border-[#323232]" />
      <div className="text-[#999999] mt-10 flex justify-between text-[11.5pt] dark:text-[#6F6F6F]">
        <div className="flex">
          <div className="flex items-center">
            <p>
              {t("Built in")}{" "}
              <strong className="text-[#666666] dark:text-[#ffffff]">
                React
              </strong>
            </p>
            <p className="px-3">-</p>
          </div>
          <div className="flex items-center">
            <p>
              {t("Made by")}{" "}
              <strong className="text-[#666666] dark:text-[#ffffff]">
                Neider
              </strong>
            </p>
            <p className="px-3">-</p>
          </div>
          <p>@2024, Colombia</p>
        </div>
        <p className="hidden lg:block text-[#666666] dark:text-[#ffffff]">
          {t("Personal Portfolio")}
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
