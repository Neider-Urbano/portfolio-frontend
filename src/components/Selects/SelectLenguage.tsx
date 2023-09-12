import React from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Language, Languages } from "../../locales/Languages";

interface SelectItemLngProps {
  language: Language;
}

const SelectItemLng: React.FC<SelectItemLngProps> = ({ language }) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar
        alt={language.label}
        className="flex-shrink-0"
        size="sm"
        src={language.avatar}
      />
      <div className="flex flex-col">
        <span className="text-small">{language.label}</span>
      </div>
    </div>
  );
};

const SelectLenguage: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      items={Languages}
      placeholder="Select language"
      name="language"
      defaultSelectedKeys={[i18n.language]}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
      }}
      aria-label="select-language"
      classNames={{
        base: "max-w-xs",
        trigger: "h-12",
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.data?.value} className="flex items-center gap-2">
            <Avatar
              alt={item.data?.label}
              className="flex-shrink-0"
              size="sm"
              src={item.data?.avatar}
            />
            <div className="flex flex-col">
              <span>{item.data?.label}</span>
            </div>
          </div>
        ));
      }}
    >
      {(lng) => (
        <SelectItem key={lng.value} textValue={lng.value}>
          <SelectItemLng language={lng} />
        </SelectItem>
      )}
    </Select>
  );
};

export default SelectLenguage;
