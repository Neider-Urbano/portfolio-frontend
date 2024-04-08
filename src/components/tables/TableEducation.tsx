import { useTranslation } from "react-i18next";
import { dataEducations } from "../../utils/dataEducation";

const TableEducation = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <h1 className="font-medium text-lg mb-5">{t("Education")}</h1>
      <div className="flex flex-col gap-7">
        {dataEducations.map((experience, index) => {
          return (
            <div key={experience.id} className="flex flex-col">
              {index > 0 && <hr className="mb-7" />}
              <div className="flex flex-col lg:flex-row">
                <p className="lg:w-[350px]">{experience.dateFinish}</p>
                <div className="mt-5  w-full lg:mt-0">
                  <h1 className="font-medium">{experience.school}</h1>
                  <h2>{t(experience.course)}</h2>
                  <p className="mt-4">{t(experience.description)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableEducation;
