import SelectLenguage from "./components/Selects/SelectLenguage";
import SwitcherDarkMode from "./components/Switchers/SwitcherDarkMode";
import { useTranslation } from "react-i18next";
const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-orange-950">
        <p>{t("hello")}</p>
      </div>
      <SwitcherDarkMode />
      <SelectLenguage />
    </div>
  );
};

export default App;
