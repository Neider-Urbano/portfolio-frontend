import { HeaderMain } from "./components/headers/HeaderMain";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <div className="container-main-app">
      <HeaderMain />

      <div className="container-routes bg-[#EEEEEE] dark:bg-[#141414]">
        <div className="bg-[#ffff] dark:bg-[#1a1a1a]">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default App;
