import { useTranslation } from "react-i18next";
import { dataExperiences } from "../../utils/dataExperiences";

const TableExperience = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <h1 className="font-medium text-lg mb-5">{t("Experience")}</h1>
      <div className="flex flex-col gap-7">
        {dataExperiences.map((experience, index) => {
          return (
            <div key={experience.id} className="flex flex-col">
              {index > 0 && <hr className="mb-7 dark:border-[#272727]" />}
              <div className="flex flex-col lg:flex-row dark:text-[#a3a3a3]">
                <p className="lg:w-[350px]">
                  {t(experience.dateInit)} {experience.yearInit} -{" "}
                  {t(experience.dateFinish)} {experience.yearFinish}
                </p>
                <div className="mt-5  w-full lg:mt-0">
                  <h1 className="font-medium dark:text-[#fff]">
                    {experience.company}
                  </h1>
                  <h2>{t(experience.rol)}</h2>
                  <p className="mt-4">{t(experience.functions)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableExperience;
