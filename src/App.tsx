import SelectLenguage from "./components/Selects/SelectLenguage";
import SwitcherDarkMode from "./components/Switchers/SwitcherDarkMode";
import { useTranslation } from "react-i18next";
const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("hello")}</p>
      <SwitcherDarkMode />
      <SelectLenguage />
    </div>
  );
};

export default App;
