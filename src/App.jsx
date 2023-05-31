//Routes
import { useRoutes } from "react-router-dom";
import routesPaths from "./routes/routes";
import MasterLayout from "./layouts/MasterLayout";


const App = () => {
  const routing = useRoutes(routesPaths);
  return <MasterLayout>{routing}</MasterLayout> 
};

export default App;
