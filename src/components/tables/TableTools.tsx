import { useTranslation } from "react-i18next";
import { dataTools } from "../../utils/dataTools";

const TableTools = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <h1 className="font-medium text-lg mb-5 ml-1">{t("Tools")}</h1>
      <table className="grid grid-cols-1  gap-1 rounded-tl-lg rounded-tr-lg overflow-hidden rounded-bl-lg rounded-br-lg lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {dataTools.map((tool) => {
          return (
            <div
              key={tool.id}
              className="flex gap-2 items-center text-lg bg-[#EFEFF0] px-7 py-2 dark:bg-[#282828]"
            >
              <tool.icon />
              <p>{tool.skill}</p>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default TableTools;
