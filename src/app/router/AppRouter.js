import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";

const AppRouter = () => {
  const { data } = useContext(AppContext);
  return <>{data?.auth?.user_id ? <HomePage /> : <RegisterPage />}</>;
};

export default AppRouter;
