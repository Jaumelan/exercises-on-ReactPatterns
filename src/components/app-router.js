import { Route, Routes } from "react-router-dom";
import routes from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component, label, exact = false }) => (
        <Route exact={exact} key={path} label={label} path={path} element={<Component />}/>
      ))}
    </Routes>
  );
};

export default AppRouter;
