import { useTranslation } from "react-i18next";
import { dataServices } from "../../utils/dataServices";

const TableServices = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <h1 className="font-medium text-lg mb-5 ml-1">{t("Services")}</h1>
      <table className="grid grid-cols-1  gap-1 rounded-tl-lg rounded-tr-lg overflow-hidden rounded-bl-lg rounded-br-lg lg:grid-cols-2">
        {dataServices.map((service) => {
          return (
            <div
              key={service.id}
              className="flex gap-2 items-center text-lg bg-[#EFEFF0] px-7 py-2"
            >
              <p>{t(service.name)}</p>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default TableServices;
