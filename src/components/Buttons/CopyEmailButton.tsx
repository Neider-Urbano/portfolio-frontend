import { Button } from "@nextui-org/react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { FaRegCopy } from "react-icons/fa";

const CopyEmailButton = () => {
  const { t } = useTranslation();

  return (
    <CopyToClipboard text="jjuly8julianur@gmail.com">
      <Button className="text-[#111]" variant="bordered">
        <FaRegCopy />
        {t("Copy email")}
      </Button>
    </CopyToClipboard>
  );
};

export default CopyEmailButton;
