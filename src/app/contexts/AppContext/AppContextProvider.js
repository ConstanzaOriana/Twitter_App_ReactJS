import { useEffect, useState } from "react";
import AppContexts from ".";

const AppContextProvider = ({ children }) => {
  const initialAppState =
    JSON.parse(window.localStorage.getItem("app_context")) ?? {};

  const [appState, setAppState] = useState(initialAppState);

  useEffect(() => {
    window.localStorage.setItem("app_context", JSON.stringify(appState));
  }, [appState]);

  return (
    <AppContexts.Provider value={{ data: appState, setData: setAppState }}>
      {children}
    </AppContexts.Provider>
  );
};

export default AppContextProvider;
