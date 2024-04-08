import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Pagination,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { dataPhrases } from "../utils/dataPhrases";
import { useTranslation } from "react-i18next";

const FamousPhrases = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPhrase, setCurrentPhrase] = useState(dataPhrases[0]);
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentPhrase(dataPhrases[currentPage - 1]);
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <Card className="w-full bg-[#F5F5F5] dark:bg-[#282828]" shadow="sm">
          <CardHeader className="flex gap-3">
            <div className="w-[40px] h-[40px] rounded-md overflow-hidden">
              <img
                alt="author logo"
                src={currentPhrase.url}
                className=" h-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-md">{currentPhrase.author}</p>
              <p className="text-small text-default-500">{t("Author")}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{currentPhrase.phrase}</p>
          </CardBody>
        </Card>
        <Pagination
          loop
          showControls
          color="default"
          total={3}
          initialPage={1}
          page={currentPage}
          onChange={setCurrentPage}
          className="mt-5"
        />
      </div>
    </div>
  );
};

export default FamousPhrases;
