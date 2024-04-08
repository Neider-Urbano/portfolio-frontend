import { HeaderMain } from "./components/headers/HeaderMain";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <div className="container-main-app ">
      <HeaderMain />

      <div className="container-routes">
        <div>
          <Router />
        </div>
      </div>
    </div>
  );
};

export default App;
